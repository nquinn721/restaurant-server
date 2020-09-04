import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('orderpayment')
export class OrderPayment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    type => Order,
    order => order.payment,
  )
  order: any;

  @Column()
  token: string;

  @Column()
  name: string;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
