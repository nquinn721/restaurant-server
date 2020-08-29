import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './models/order.entity';
import { OrderItem } from './models/orderItem.entity';
import { OrderItemMod } from './models/orderItemMod.entity';
import { OrderItemSide } from './models/orderItemSide.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, OrderItemMod, OrderItemSide]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
