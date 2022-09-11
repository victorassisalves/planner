import { CreateServiceOrderDto, FindOneParams } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
export declare class ServiceOrdersService {
    serviceOrder: CreateServiceOrderDto[];
    create(so: CreateServiceOrderDto): Promise<string>;
    findAll(): CreateServiceOrderDto[];
    findOne(id: FindOneParams): CreateServiceOrderDto;
    update(id: number, so: UpdateServiceOrderDto): string;
    remove(id: number): string;
}
