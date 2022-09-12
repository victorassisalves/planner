import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { ServiceOrdersModule } from './service-orders/service-orders.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TeamsModule, ServiceOrdersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
