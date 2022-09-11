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
const service_orders_dto_1 = require("./service-orders.dto");
let ServiceOrdersController = class ServiceOrdersController {
    getAll() {
        return `All service orders!`;
    }
    getOne(id) {
        return `Just got the service order with ID: ${id}.`;
    }
    create(so) {
        console.log(so);
        return `Service Order Created!`;
    }
    update(id, so) {
        console.log(so);
        return `Service Order #${id} Updated!`;
    }
    delete(so) {
        return `Service Order ID:${so.id} Deleted!`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ServiceOrdersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ServiceOrdersController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_orders_dto_1.CreateSODTO]),
    __metadata("design:returntype", String)
], ServiceOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(`:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, service_orders_dto_1.CreateSODTO]),
    __metadata("design:returntype", String)
], ServiceOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ServiceOrdersController.prototype, "delete", null);
ServiceOrdersController = __decorate([
    (0, common_1.Controller)('service-orders')
], ServiceOrdersController);
exports.ServiceOrdersController = ServiceOrdersController;
//# sourceMappingURL=service-orders.controller.js.map