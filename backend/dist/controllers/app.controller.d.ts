import { AppService } from '../services/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(request: Request): string;
}
