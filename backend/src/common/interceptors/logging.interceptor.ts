import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import chalk from 'chalk';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const parentType = context.getArgs?.()?.[0]?.method;

    const fieldName = context.getArgs?.()?.[0]?.url;

    return next.handle().pipe(
      tap(() => {
        Logger.debug(`${parentType} » ${fieldName}`, 'API');
      }),
    );
  }
}
