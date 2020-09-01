import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Item } from '../../restaurant/models/item.entity';
import { Order } from './order.entity';
import { OrderItemMod } from './orderItemMod.entity';

@Entity('orderitem')
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Item)
  item: Item;

  @ManyToOne(type => Order)
  order: Order;

  @OneToMany(
    type => OrderItemMod,
    orderitemmod => orderitemmod.orderItem,
  )
  mods: any[];

  @OneToMany(
    type => OrderItemMod,
    orderitemside => orderitemside.orderItem,
  )
  side: any[];

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
