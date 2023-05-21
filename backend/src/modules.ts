import { Module } from '@nestjs/common';
 
import { ViewsModule } from './module/views.module';
 
@Module({
  imports: [
 
    ViewsModule,
 
    // Add more modules here
  ],
})
export class APIModules {}
