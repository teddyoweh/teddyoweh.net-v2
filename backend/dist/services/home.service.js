"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const view_model_1 = require("../models/view.model");
const View = new view_model_1.ViewsModel().view();
let HomeService = class HomeService {
    getHello() {
        return 'Hello World!';
    }
    async getInitial() {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todaysViews = await View.find({ date: { $gte: today } }).exec();
            const totalViewsNo = await View.countDocuments().exec();
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const monthViewsNo = await View.countDocuments({ date: { $gte: startOfMonth } }).exec();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayViews = await View.find({
                date: { $gte: yesterday, $lt: today }
            }).exec();
            const dayBeforeYesterday = new Date(yesterday);
            dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 1);
            const dayBeforeYesterdayViews = await View.find({
                date: { $gte: dayBeforeYesterday, $lt: yesterday }
            }).exec();
            const daysOfWeek = {};
            let currentDate = new Date(today);
            for (let i = 0; i < 7; i++) {
                const currentViews = await View.find({
                    date: { $gte: currentDate, $lt: today }
                }).exec();
                daysOfWeek[currentDate.toISOString()] = currentViews;
                currentDate.setDate(currentDate.getDate() - 1);
            }
            const timeHashMap = {};
            let currentTime = new Date();
            currentTime.setMinutes(0, 0, 0);
            for (let i = 0; i < 12; i++) {
                const startTime = new Date(currentTime);
                startTime.setHours(startTime.getHours() - 2);
                const timeViews = await View.find({
                    date: { $gte: startTime, $lt: currentTime }
                }).exec();
                timeHashMap[currentTime.toISOString()] = timeViews;
                currentTime.setHours(currentTime.getHours() - 2);
            }
            return {
                todaysViews: todaysViews,
                totalViewsNo: totalViewsNo,
                monthViewsNo: monthViewsNo,
                yesterdayViews: yesterdayViews,
                dayBeforeYesterdayViews: {
                    day: dayBeforeYesterday.toISOString(),
                    views: dayBeforeYesterdayViews
                },
                daysOfWeek: daysOfWeek,
                today: today,
                timeHashMap: timeHashMap
            };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
HomeService = __decorate([
    (0, common_1.Injectable)()
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map