import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServiceOrdersService } from './service-orders.service';
import { CreateServiceOrderDto, FindOneParams } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';

@Controller('service-orders')
export class ServiceOrdersController {
  constructor(private readonly serviceOrdersService: ServiceOrdersService) { }

  @Post()
  create(@Body() so: CreateServiceOrderDto) {
    return this.serviceOrdersService.create(so);
  }

  @Get()
  findAll() {
    return this.serviceOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceOrdersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() so: UpdateServiceOrderDto) {
    return this.serviceOrdersService.update(id, so);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceOrdersService.remove(id);
  }
}
