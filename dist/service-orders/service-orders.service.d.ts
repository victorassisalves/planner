import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
export declare class ServiceOrdersService {
    serviceOrder: CreateServiceOrderDto[];
    create(so: CreateServiceOrderDto): string;
    findAll(): CreateServiceOrderDto[];
    findOne(id: number): CreateServiceOrderDto;
    update(id: number, so: UpdateServiceOrderDto): string;
    remove(id: number): string;
}
