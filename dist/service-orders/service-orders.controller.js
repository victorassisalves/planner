"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdersController = void 0;
const common_1 = require("@nestjs/common");
const service_orders_service_1 = require("./service-orders.service");
const create_service_order_dto_1 = require("./dto/create-service-order.dto");
const update_service_order_dto_1 = require("./dto/update-service-order.dto");
let ServiceOrdersController = class ServiceOrdersController {
    constructor(serviceOrdersService) {
        this.serviceOrdersService = serviceOrdersService;
    }
    create(so) {
        return this.serviceOrdersService.create(so);
    }
    findAll() {
        return this.serviceOrdersService.findAll();
    }
    findOne(id) {
        return this.serviceOrdersService.findOne(id);
    }
    update(id, so) {
        return this.serviceOrdersService.update(id, so);
    }
    remove(id) {
        return this.serviceOrdersService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_order_dto_1.CreateServiceOrderDto]),
    __metadata("design:returntype", void 0)
], ServiceOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_order_dto_1.UpdateServiceOrderDto]),
    __metadata("design:returntype", void 0)
], ServiceOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceOrdersController.prototype, "remove", null);
ServiceOrdersController = __decorate([
    (0, common_1.Controller)('service-orders'),
    __metadata("design:paramtypes", [service_orders_service_1.ServiceOrdersService])
], ServiceOrdersController);
exports.ServiceOrdersController = ServiceOrdersController;
//# sourceMappingURL=service-orders.controller.js.map