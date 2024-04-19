import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DbModule } from './db/db.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
