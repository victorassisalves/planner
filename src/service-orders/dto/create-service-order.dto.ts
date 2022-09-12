import { IsDate, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateServiceOrderDto {
  @IsNotEmpty()
  name: string;
  account: string;
  price: number;
  leader: string;
  @IsNotEmpty()
  serviceId: string;
  serviceName: string;
  // @IsNotEmpty()
  serviceOrderId: string;
  // @IsNumberString()
  year: number;
  // @IsDate()
  billingDate: Date;
  status: string;
  milestone: string;
  responsibleTeam: {
    teamId: string;
    teamMembers: [

    ]
  }
  billingOrders?: [
    {

    }
  ]
}