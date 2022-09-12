import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { ServiceOrdersModule } from './service-orders/service-orders.module';

@Module({
  imports: [TeamsModule, ServiceOrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
