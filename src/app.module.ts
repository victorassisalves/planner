import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceOrdersController } from './service-orders/service-orders.controller';
import { TeamsModule } from './teams/teams.module';
import { ServiceOrdersModule } from './service-orders/service-orders.module';
import { ServiceOrdersService } from './service-orders/service-orders.service';

@Module({
  imports: [TeamsModule, ServiceOrdersModule],
  controllers: [AppController, ServiceOrdersController],
  providers: [AppService, ServiceOrdersService],
})
export class AppModule { }
