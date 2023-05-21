import mongoose from 'mongoose';
export declare class ViewsModel {
    view(): mongoose.Model<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
    }> & Omit<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
    } & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
    }>> & Omit<mongoose.FlatRecord<{
        date: Date;
        viewedno: number;
        ip?: any;
        userdata?: any;
        pageviewed?: string;
        browser?: any;
        operatingSystem?: any;
    }> & {
        _id: mongoose.Types.ObjectId;
    }, never>>>;
}
