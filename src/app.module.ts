import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceOrdersController } from './service-orders/service-orders.controller';
import { TeamsModule } from './teams/teams.module';
import { ServiceOrdersModule } from './service-orders/service-orders.module';

@Module({
  imports: [TeamsModule, ServiceOrdersModule],
  controllers: [AppController, ServiceOrdersController],
  providers: [AppService],
})
export class AppModule {}
