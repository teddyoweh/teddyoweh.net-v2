import { ViewService } from '../services/view.service';
export declare class ViewController {
    private readonly viewService;
    constructor(viewService: ViewService);
    findAll(request: Request): string;
    addPayment(body: any): object;
}
