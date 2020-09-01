import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/models/user.entity';
import { OrderItem } from './orderItem.entity';

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => User)
  user: User;

  @OneToMany(
    type => OrderItem,
    orderitem => orderitem.order,
  )
  @JoinColumn()
  items: any[];

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
