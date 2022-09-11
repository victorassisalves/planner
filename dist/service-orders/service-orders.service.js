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
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount = require('../../firebase-auth.json');
(0, app_1.initializeApp)({ credential: (0, app_1.cert)(serviceAccount) });
const db = (0, firestore_1.getFirestore)();
let ServiceOrdersService = class ServiceOrdersService {
    constructor() {
        this.docRef = db.collection('serviceOrders');
    }
    async create(so) {
        const newSo = this.docRef.doc();
        await this.docRef.add(Object.assign(Object.assign({}, so), { id: newSo.id, createdTime: firestore_1.FieldValue.serverTimestamp() }));
        return Object.assign(Object.assign({}, so), { id: newSo.id });
    }
    async findAll() {
        const first = this.docRef.orderBy('leader', 'desc').limit(10);
        const snapshot = await first.get();
        const soList = [];
        snapshot.forEach(so => {
            soList.push(so.data());
        });
        return soList;
    }
    async findOne(id) {
        const res = await this.docRef.doc(id).get();
        console.log(res.data());
        if (!res.data()) {
            console.log('No matching documents.');
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return res.data();
    }
    async update(id, so) {
        try {
            const res = await this.docRef.doc(id).update(Object.assign(Object.assign({}, so), { lastUpdatedTime: firestore_1.FieldValue.serverTimestamp() }));
            return res;
        }
        catch (error) {
            console.log(error);
            if (error.code == 5) {
                throw new common_1.HttpException('Service Order Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException(`Error Updating Service Order. Details: ${error.details}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        console.log(id);
        const res = await this.docRef.doc(id).delete();
        console.log(res);
        return res;
    }
};
ServiceOrdersService = __decorate([
    (0, common_1.Injectable)()
], ServiceOrdersService);
exports.ServiceOrdersService = ServiceOrdersService;
//# sourceMappingURL=service-orders.service.js.map