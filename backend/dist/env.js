"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
require('dotenv').config();
class Env {
    env() {
        return { URI: process.env.DB };
    }
    ip(os) {
        const interfaces = os.networkInterfaces();
        for (const interfaceName of Object.keys(interfaces)) {
            const addresses = interfaces[interfaceName];
            for (const address of addresses) {
                if (address.family === 'IPv4' && !address.internal) {
                    return address.address;
                }
            }
        }
        return undefined;
    }
}
exports.Env = Env;
//# sourceMappingURL=env.js.map