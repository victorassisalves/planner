"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("firebase-admin/firestore");
const main_1 = require("../main");
let TeamsService = class TeamsService {
    constructor() {
        this.teamRef = main_1.db.collection(`teams`);
    }
    async create(team) {
        const newTeam = this.teamRef.doc(team.teamName);
        const teamId = this.teamRef.doc();
        await newTeam.set(Object.assign(Object.assign({}, team), { id: teamId.id, createdTime: firestore_1.FieldValue.serverTimestamp() }));
        return Object.assign(Object.assign({}, team), { id: teamId.id });
    }
    findAll() {
        return `This action returns all teams`;
    }
    async findOne(teamName) {
        console.log(teamName);
        const res = await this.teamRef.doc(teamName).get();
        if (!res.data()) {
            console.log('No matching documents.');
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return res.data();
    }
    update(id, updateTeamDto) {
        return `This action updates a #${id} team`;
    }
    remove(id) {
        return `This action removes a #${id} team`;
    }
};
TeamsService = __decorate([
    (0, common_1.Injectable)()
], TeamsService);
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map