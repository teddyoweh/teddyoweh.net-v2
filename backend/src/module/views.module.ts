import { Module } from '@nestjs/common';
import { ViewController,ReqeustController } from '../controllers/views.controller';
import { ViewService } from '../services/view.service';

@Module({
  imports: [],
  controllers: [ViewController,ReqeustController],
  providers: [ViewService],
})
export class ViewsModule {}