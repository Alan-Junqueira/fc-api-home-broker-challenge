import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('assets')
  getAssets(): string {
    return this.appService.getHello();
  }

  @Post('assets')
  createAsset(): string {
    return this.appService.getHello();
  }
}
