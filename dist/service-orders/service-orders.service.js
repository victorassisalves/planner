"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdersService = void 0;
const common_1 = require("@nestjs/common");
const create_service_order_dto_1 = require("./dto/create-service-order.dto");
let ServiceOrdersService = class ServiceOrdersService {
    constructor() {
        this.serviceOrder = [
            new create_service_order_dto_1.CreateServiceOrderDto(100, 'Inventora Digital TR', 199.09, 'Tax Return', 'Victor Assis'),
            new create_service_order_dto_1.CreateServiceOrderDto(101, 'Inventora Digital BF', 799.09, 'Business Formation', 'Victor Assis'),
        ];
    }
    create(so) {
        console.log(so);
        this.serviceOrder.push(so);
        return 'This action adds a new serviceOrder';
    }
    findAll() {
        return this.serviceOrder;
    }
    findOne(id) {
        const index = this.serviceOrder.findIndex((so) => so.id == id);
        return this.serviceOrder[index];
    }
    update(id, so) {
        const index = this.serviceOrder.findIndex((so) => so.id == id);
        return `This action updates a #${id} serviceOrder`;
    }
    remove(id) {
        const index = this.serviceOrder.findIndex((so) => so.id == id);
        console.log(index);
        if (index == -1) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        this.serviceOrder.splice(index, 1);
        return `This action removes a #${id} serviceOrder`;
    }
};
ServiceOrdersService = __decorate([
    (0, common_1.Injectable)()
], ServiceOrdersService);
exports.ServiceOrdersService = ServiceOrdersService;
//# sourceMappingURL=service-orders.service.js.map