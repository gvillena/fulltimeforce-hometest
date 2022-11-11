import { LoggerService } from '../services';
import { Module, Provider } from '@nestjs/common';

const providers: Provider[] = [LoggerService];

@Module({
  providers,
  exports: [...providers],
})
export class LoggerModule {}
