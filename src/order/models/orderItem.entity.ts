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
import { OrderItemSide } from './orderItemSide.entity';

@Entity('orderitem')
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Item)
  item: Item;

  @ManyToOne(type => Order)
  order: any;

  @OneToMany(
    type => OrderItemMod,
    orderitemmod => orderitemmod.orderItem,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  mods: any[];

  @OneToMany(
    type => OrderItemSide,
    orderitemside => orderitemside.orderItem,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  sides: any[];

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
