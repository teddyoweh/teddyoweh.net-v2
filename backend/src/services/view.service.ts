/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {ViewsModel} from '../models/view.model'
const Views = new ViewsModel().view()
@Injectable()
export class ViewService {
  getHello(): string {
    return 'Hello World!';
  }
  addView(body):object{
    console.log(body)
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
}
