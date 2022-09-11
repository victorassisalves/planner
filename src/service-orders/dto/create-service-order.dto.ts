import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateServiceOrderDto {
  id: string;
  @IsNotEmpty()
  name: string;
  price: number;
  service: string;
  leader: string;

  constructor(id: string, name: string, price: number, service: string, leader: string) {
    this.id = id;
    this.leader = leader;
    this.name = name;
    this.price = price;
    this.service = service;
  }
}

export class FindOneParams {
  id: string;
}
