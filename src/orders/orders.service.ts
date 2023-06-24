import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) { }

  all(){
    return this.prismaService.order.findMany()
  }

  create(data: Prisma.OrderUncheckedCreateInput) {
    return this.prismaService.order.create({
      data
    })
  }
}
