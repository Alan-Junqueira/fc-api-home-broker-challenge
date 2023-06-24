import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ORDER_STATUS } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get()
  all() {
    return this.ordersService.all()
  }

  @Post()
  create(@Body() body: {
    price: number
    status: ORDER_STATUS
    asset_id: string
  }) {
    return this.ordersService.create(body)
  }
}
