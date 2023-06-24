import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service'

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) { }

  all() {
    return this.prismaService.order.findMany()
  }

  create(data: {
    price: number
    status: "PENDING" | "OPEN" | "CLOSED"
    asset_id: string
  }) {
    return this.prismaService.order.create({
      data
    })
  }
}
