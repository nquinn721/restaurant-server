import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Side } from 'src/restaurant/models/side.entitity';
import { OrderItem } from './orderItem.entity';

@Entity('orderitemside')
export class OrderItemSide extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => OrderItem)
  orderItem: OrderItem;

  @OneToOne(type => Side)
  side: Side;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
