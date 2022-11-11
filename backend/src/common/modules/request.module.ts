import { ConfigService, ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('GITHUB_URL'),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${configService.get('GITHUB_TOKEN')}`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [HttpModule],
})
export class RequestModule {}
