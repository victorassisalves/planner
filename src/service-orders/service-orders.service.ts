import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';

@Injectable()
export class ServiceOrdersService {
  serviceOrder: CreateServiceOrderDto[] = [
    new CreateServiceOrderDto(
      100,
      'Inventora Digital TR',
      199.09,
      'Tax Return',
      'Victor Assis',
    ),
    new CreateServiceOrderDto(
      101,
      'Inventora Digital BF',
      799.09,
      'Business Formation',
      'Victor Assis',
    ),
  ];
  create(so: CreateServiceOrderDto) {
    console.log(so);
    const index = this.serviceOrder.findIndex((service) => so.id == service.id);
    console.log(index);
    if (index > 0) {
      throw new HttpException('ID already Exists', HttpStatus.CONFLICT);
    }
    this.serviceOrder.push(so);
    return 'This action adds a new serviceOrder';
  }

  findAll() {
    return this.serviceOrder;
  }

  findOne(id: number) {
    const index = this.serviceOrder.findIndex((so) => so.id == id);
    return this.serviceOrder[index];
    // return `This action returns a #${id} serviceOrder`;
  }

  update(id: number, so: UpdateServiceOrderDto) {
    const index = this.serviceOrder.findIndex((so) => so.id == id);
    // const oldSO = this.serviceOrder[index];
    return `This action updates a #${id} serviceOrder`;
  }

  remove(id: number) {
    const index = this.serviceOrder.findIndex((so) => so.id == id);
    console.log(index);
    if (index == -1) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    this.serviceOrder.splice(index, 1);
    return `This action removes a #${id} serviceOrder`;
  }
}
