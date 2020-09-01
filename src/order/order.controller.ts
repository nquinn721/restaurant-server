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
      'items.mods': {
        eager: true,
      },
      'items.sides': {
        eager: true,
      },
    },
  },
})
@Controller('order')
export class OrderController {
  constructor(public service: OrderService) {}
}
