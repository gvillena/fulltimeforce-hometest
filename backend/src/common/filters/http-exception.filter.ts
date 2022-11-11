import { FastifyReply, FastifyRequest } from 'fastify';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { LoggerService } from '../services';

interface IError {
  message: string;
  status: number;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  private uniqueException(exception: HttpException): IError {
    return {
      message: exception.message,
      status: HttpStatus.BAD_REQUEST, // 400
    };
  }

  private notFoundException(exception: HttpException): IError {
    return {
      message: exception.message,
      status: HttpStatus.NOT_FOUND,
    };
  }

  private jwtException(exception: HttpException): IError {
    return {
      message: exception.message,
      status: HttpStatus.UNAUTHORIZED, // 401
    };
  }

  private validationException(exception: HttpException): IError {
    return {
      message: exception.message,
      status: HttpStatus.BAD_REQUEST, // 400
    };
  }

  private authorization(): IError {
    return {
      message: 'Unauthorized',
      status: HttpStatus.UNAUTHORIZED, // 401
    };
  }

  private sendFastifyReply(
    response: FastifyReply,
    request: FastifyRequest,
    { message, status }: IError,
    exception: HttpException,
  ): void {
    response.status(status).send({
      success: false,
      statusCode: status,
      message,
    });

    this.logMessage(request, { message, status }, exception);
  }

  private logMessage(
    request: FastifyRequest,
    { message, status }: IError,
    exception: HttpException,
  ) {
    if (status === HttpStatus.INTERNAL_SERVER_ERROR)
      this.logger.error(
        `End Request for ${request}.`,
        `method=${request.method} status=${status} code_error=${
          message ? message : null
        } message=${message ? message : null}`,
        status >= HttpStatus.INTERNAL_SERVER_ERROR ? exception?.stack : '',
      );
    else
      this.logger.warn(
        `End Request for ${request.routerPath}`,
        `method=${request.method} status=${status} code_error=${
          message ? status : null
        } message=${message ? message : null}`,
      );
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();

    const request = ctx.getRequest<FastifyRequest>();

    let status: HttpStatus;

    try {
      status = exception?.getStatus();
    } catch {
      status = HttpStatus.INTERNAL_SERVER_ERROR; // 500
    }

    const error: IError = {
      status,
      message:
        status === HttpStatus.INTERNAL_SERVER_ERROR // 500
          ? `${exception.message}.`
          : exception.message,
    };

    console.warn(exception);

    if (
      exception.name === 'CastError' ||
      (!exception.message.includes('Cannot read') &&
        exception.message.includes('Cannot'))
    ) {
      this.sendFastifyReply(
        response,
        request,
        this.notFoundException(exception),
        exception,
      );

      return;
    }

    if ((exception as unknown as { code: number }).code === 11000) {
      this.sendFastifyReply(
        response,
        request,
        this.uniqueException(exception),
        exception,
      );

      return;
    }

    if (exception.name === 'ValidationError') {
      this.sendFastifyReply(
        response,
        request,
        this.validationException(exception),
        exception,
      );

      return;
    }

    if (
      status === HttpStatus.UNAUTHORIZED &&
      exception?.message?.includes('Unauthorized')
    ) {
      this.sendFastifyReply(response, request, this.authorization(), exception);

      return;
    }

    if (exception.name === 'JsonWebTokenError') {
      this.sendFastifyReply(
        response,
        request,
        this.jwtException(exception),
        exception,
      );

      return;
    }

    this.sendFastifyReply(response, request, error, exception);
  }
}
