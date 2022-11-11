import { LoggerService } from '../services/logger.service';
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';

@Catch()
export class FallbackExpectionFilter implements ExceptionFilter {
  constructor(private readonly _loggerService: LoggerService) {}

  catch(exception: { message: string }, host: ArgumentsHost) {
    this._loggerService.error(
      'Exception Filter',
      `fallback exception handler triggered. Exception = ${exception.message}`,
    );

    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response = ctx.getResponse();

    const BAD_REQUEST: HttpStatus = HttpStatus.BAD_REQUEST;

    return response.status(BAD_REQUEST).json({
      success: false,
      statusCode: BAD_REQUEST,
      message: exception.message,
    });
  }
}
