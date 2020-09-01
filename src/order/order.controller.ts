import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Order } from './models/order.entity';
import { OrderService } from './order.service';

@Crud({
  model: {
    type: Order,
  },
  query: {
    join: {
      items: {
        eager: true,
      },
      'items.item': {
        eager: true,
      },
      'items.mods': {
        eager: true,
      },
      'items.mods.modification': {
        eager: true,
      },
      'items.sides': {
        eager: true,
      },
      'items.sides.side': {
        eager: true,
      },
    },
  },
})
@Controller('order')
export class OrderController {
  constructor(public service: OrderService) {}
}
