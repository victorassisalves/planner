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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeamDto = exports.IsTeamUnique = exports.IsTeamUniqueConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const main_1 = require("../../main");
const teams_service_1 = require("../teams.service");
let IsTeamUniqueConstraint = class IsTeamUniqueConstraint {
    constructor(teamsService) {
        this.teamsService = teamsService;
        this.teamRef = main_1.db.collection('teams');
    }
    async validate(teamName, validationArguments) {
        const res = await this.teamRef.doc(teamName).get();
        if (!res.data()) {
            console.log('No matching teams.');
            return true;
        }
        return false;
    }
};
IsTeamUniqueConstraint = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_2.ValidatorConstraint)(),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], IsTeamUniqueConstraint);
exports.IsTeamUniqueConstraint = IsTeamUniqueConstraint;
function IsTeamUnique(valitionOptions) {
    return function (object, propertyName) {
        (0, class_validator_2.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: valitionOptions,
            constraints: [],
            validator: IsTeamUniqueConstraint,
        });
    };
}
exports.IsTeamUnique = IsTeamUnique;
class CreateTeamDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "teamName", void 0);
exports.CreateTeamDto = CreateTeamDto;
//# sourceMappingURL=create-team.dto.js.map