"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceOrderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_order_dto_1 = require("./create-service-order.dto");
class UpdateServiceOrderDto extends (0, mapped_types_1.PartialType)(create_service_order_dto_1.CreateServiceOrderDto) {
}
exports.UpdateServiceOrderDto = UpdateServiceOrderDto;
//# sourceMappingURL=update-service-order.dto.js.map