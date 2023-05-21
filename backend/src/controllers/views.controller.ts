import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ViewService } from '../services/view.service';
import { Request } from 'express'
@Controller('views')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return this.viewService.getHello();
  }
  @Post('/add')
  addPayment(@Body() body: any) {
    return this.viewService.addView(body);
  }
}
