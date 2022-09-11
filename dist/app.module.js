"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const service_orders_controller_1 = require("./service-orders/service-orders.controller");
const teams_module_1 = require("./teams/teams.module");
const service_orders_module_1 = require("./service-orders/service-orders.module");
const service_orders_service_1 = require("./service-orders/service-orders.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [teams_module_1.TeamsModule, service_orders_module_1.ServiceOrdersModule],
        controllers: [service_orders_controller_1.ServiceOrdersController],
        providers: [app_service_1.AppService, service_orders_service_1.ServiceOrdersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map