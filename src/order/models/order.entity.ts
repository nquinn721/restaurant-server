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

export enum Status {
  RECIEVED = 'Recieved',
  COMPLETE = 'Complete',
}

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => User)
  user: User;

  @OneToMany(
    type => OrderItem,
    orderitem => orderitem.order,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  @JoinColumn()
  items: any[];

  @Column({ type: 'enum', enum: Status, default: Status.RECIEVED })
  status: string;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
