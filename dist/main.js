"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const class_validator_1 = require("class-validator");
const serviceAccount = require('../firebase-auth.json');
(0, app_1.initializeApp)({ credential: (0, app_1.cert)(serviceAccount) });
exports.db = (0, firestore_1.getFirestore)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map