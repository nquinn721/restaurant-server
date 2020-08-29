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

@Entity('orderitem')
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ManyToOne(type => Item)
  item: Item;

  @Column({ nullable: true })
  @ManyToOne(type => Order)
  order: Order;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
