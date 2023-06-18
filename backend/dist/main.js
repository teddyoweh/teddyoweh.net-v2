"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const modules_1 = require("./modules");
const env_1 = require("./env");
const mongoose_1 = require("mongoose");
const env = new env_1.Env();
async function bootstrap() {
    const app = await core_1.NestFactory.create(modules_1.APIModules);
    mongoose_1.default.connect(env.env().URI).then(() => {
        console.log('Database is connected');
    }, (err) => {
        console.log('Can not connect to the database' + err);
    });
    app.enableCors();
    const server = await app.listen(4000);
    const address = server.address();
    const host = address.address;
    const port = address.port;
    console.log(`Server running at http://${env.ip()}:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map