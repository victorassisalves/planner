import { CreateSODTO } from './service-orders.dto';
export declare class ServiceOrdersController {
    getAll(): string;
    getOne(id: any): string;
    create(so: CreateSODTO): string;
    update(id: string, so: CreateSODTO): string;
    delete(so: any): string;
}
