export class CreateServiceOrderDto {
  id: number;
  name: string;
  price: number;
  service: string;
  leader: string;

  constructor(id: number, name: string, price: number, service: string, leader: string) {
    this.id = id;
    this.leader = leader;
    this.name = name;
    this.price = price;
    this.service = service;
  }
}
