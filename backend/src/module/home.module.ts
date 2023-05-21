import { Module } from '@nestjs/common';
import { HomeController} from '../controllers/home.controller';
import { HomeService } from '../services/home.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
