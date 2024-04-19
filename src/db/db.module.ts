import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'admin@123'),
        database: configService.get<string>('DB_NAME', 'eduhub'),
        synchronize: configService.get<boolean>('DB_SYNC', false),
        autoLoadEntities: true
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
