/* eslint-disable prettier/prettier */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 

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

const Views = mongoose.model('views', ViewsSchema);
export class ViewsModel{
    view(){
        return Views
    }
}

// export const Views;