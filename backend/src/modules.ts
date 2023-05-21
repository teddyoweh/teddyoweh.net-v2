import { Module } from '@nestjs/common';
 
import { ViewsModule } from './module/views.module';
import { HomeModule } from './module/home.module';
 
@Module({
  imports: [
 
    ViewsModule,
    HomeModule
 
    // Add more modules here
  ],
})
export class APIModules {}
