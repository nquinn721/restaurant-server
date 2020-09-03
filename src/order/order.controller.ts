import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { Order } from './models/order.entity';
import { OrderService } from './order.service';
import { OrderGateway } from './order.gateway';

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
export class OrderController implements CrudController<Order> {
  constructor(
    public service: OrderService,
    private readonly gateway: OrderGateway,
  ) {}

  get base(): CrudController<Order> {
    return this;
  }

  @Override('createOneBase')
  async createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Order) {
    const order = await this.base.createOneBase(req, dto);
    this.gateway.server.emit('order', order);
    return order;
  }
}
