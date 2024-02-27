import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getPersonName/:name')
  async getPersonName(@Param('name') name: string): Promise<string> {
    return await this.appService.getPersonName(name);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
