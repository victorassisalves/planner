import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
export declare class ServiceOrdersService {
    docRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    create(so: CreateServiceOrderDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<FirebaseFirestore.DocumentData>;
    update(id: string, so: UpdateServiceOrderDto): Promise<FirebaseFirestore.DocumentData>;
    remove(id: string): Promise<FirebaseFirestore.WriteResult>;
}
