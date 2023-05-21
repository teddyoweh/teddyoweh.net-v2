"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
require('dotenv').config();
class Env {
    env() {
        return { URI: process.env.DB };
    }
}
exports.Env = Env;
//# sourceMappingURL=env.js.map