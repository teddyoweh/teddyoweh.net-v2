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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqeustController = exports.ViewController = void 0;
const common_1 = require("@nestjs/common");
const view_service_1 = require("../services/view.service");
let ViewController = class ViewController {
    constructor(viewService) {
        this.viewService = viewService;
    }
    findAll(request) {
        console.log(request.body);
        return this.viewService.getHello();
    }
    addPayment(body) {
        return this.viewService.addView(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ViewController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ViewController.prototype, "addPayment", null);
ViewController = __decorate([
    (0, common_1.Controller)('views'),
    __metadata("design:paramtypes", [view_service_1.ViewService])
], ViewController);
exports.ViewController = ViewController;
let ReqeustController = class ReqeustController {
    getHello(request) {
        return {
            message: 'Teddy Says Hello',
        };
    }
    getHelloP(request) {
        return {
            message: 'Teddy Says Hello - POST',
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReqeustController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReqeustController.prototype, "getHelloP", null);
ReqeustController = __decorate([
    (0, common_1.Controller)()
], ReqeustController);
exports.ReqeustController = ReqeustController;
//# sourceMappingURL=views.controller.js.map