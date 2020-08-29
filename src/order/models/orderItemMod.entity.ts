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
import { User } from 'src/user/models/user.entity';
import { Item } from 'src/restaurant/models/item.entity';
import { Order } from './order.entity';
import { OrderItem } from './orderItem.entity';
import { Modification } from 'src/restaurant/models/modification.entity';

@Entity('orderitemmod')
export class OrderItemMod extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ManyToOne(type => Modification)
  modification: Modification;

  @Column({ nullable: true })
  @ManyToOne(type => OrderItem)
  orderItem: OrderItem;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
