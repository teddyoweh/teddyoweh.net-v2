import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import {HomeService } from '../services/home.service';
import { Request } from 'express'
 
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return this.homeService.getHello();
  }
   @Post('/initial')
   getInitial(@Req() request:Request) {
    return this.homeService.getInitial()

   }
}

 

