import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { OrderItem } from './orderItem.entity';
import { Modification } from '../../restaurant/models/modification.entity';

@Entity('orderitemmod')
export class OrderItemMod extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Modification)
  modification: Modification;

  @ManyToOne(type => OrderItem)
  orderItem: OrderItem;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
