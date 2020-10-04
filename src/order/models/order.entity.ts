import { Location } from '../../restaurant/models/location.enitity';
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
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/models/user.entity';
import { OrderItem } from './orderItem.entity';
import { OrderPayment } from './orderPayment.entity';

export enum Status {
  RECIEVED = 'recieved',
  STARTED = 'started',
  COMPLETE = 'complete',
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

  @OneToOne(
    type => OrderPayment,
    orderPayment => orderPayment.order,
    {
      cascade: ['insert', 'update', 'remove'],
    },
  )
  payment: any;

  @Column({ type: 'enum', enum: Status, default: Status.RECIEVED })
  status: string;

  @ManyToOne(type => Location)
  location: Location;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
