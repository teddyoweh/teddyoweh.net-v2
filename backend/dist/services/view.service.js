"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewService = void 0;
const common_1 = require("@nestjs/common");
const view_model_1 = require("../models/view.model");
const Views = new view_model_1.ViewsModel().view();
let ViewService = class ViewService {
    getHello() {
        return 'Hello World!';
    }
    addView(body) {
        console.log(body);
        const newView = new Views({
            ip: body.ip,
            userdata: body.userdata,
            pageviewed: body.pageviewed,
            viewedno: body.viewedno,
            browser: body.browser,
            operatingSystem: body.operatingSystem,
            date: body.date
        });
        newView.save();
        return {};
    }
};
ViewService = __decorate([
    (0, common_1.Injectable)()
], ViewService);
exports.ViewService = ViewService;
//# sourceMappingURL=view.service.js.map