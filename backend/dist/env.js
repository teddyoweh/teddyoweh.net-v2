"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
require('dotenv').config();
const { networkInterfaces } = require('os');
class Env {
    env() {
        return { URI: process.env.DB };
    }
    ip() {
        const nets = networkInterfaces();
        const results = Object.create(null);
        for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
                const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
                if (net.family === familyV4Value && !net.internal) {
                    if (!results[name]) {
                        results[name] = [];
                    }
                    results[name].push(net.address);
                }
            }
        }
        const ans = results;
        return JSON.stringify(ans);
    }
}
exports.Env = Env;
//# sourceMappingURL=env.js.map