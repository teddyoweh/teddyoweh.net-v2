"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsModel = void 0;
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.default.Schema;
const ViewsSchema = new Schema({
    ip: {},
    userdata: {},
    pageviewed: {
        type: String
    },
    viewedno: {
        type: Number,
        default: 0
    },
    browser: {},
    operatingSystem: {},
    date: {
        type: Date,
        default: Date.now
    },
});
const Views = mongoose_1.default.model('views', ViewsSchema);
class ViewsModel {
    view() {
        return Views;
    }
}
exports.ViewsModel = ViewsModel;
//# sourceMappingURL=view.model.js.map