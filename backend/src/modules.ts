import { Module } from '@nestjs/common';
import { AppModule } from './module/app.module';
import { ViewsModule } from './module/views.module';
 
@Module({
  imports: [
    AppModule,
    ViewsModule,
 
    // Add more modules here
  ],
})
export class APIModules {}
