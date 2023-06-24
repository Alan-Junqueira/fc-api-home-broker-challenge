import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get()
  all() {
    return this.ordersService.all()
  }

  @Post()
  create(@Body() body: {
    price: number
    status: "PENDING" | "OPEN" | "CLOSED"
    asset_id: string
  }) {
    return this.ordersService.create(body)
  }
}
