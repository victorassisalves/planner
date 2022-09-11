import { ServiceOrdersService } from './service-orders.service';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
export declare class ServiceOrdersController {
    private readonly serviceOrdersService;
    constructor(serviceOrdersService: ServiceOrdersService);
    create(so: CreateServiceOrderDto): string;
    findAll(): CreateServiceOrderDto[];
    findOne(id: string): CreateServiceOrderDto;
    update(id: string, updateServiceOrderDto: UpdateServiceOrderDto): string;
    remove(id: string): string;
}
