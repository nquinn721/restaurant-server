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

@Entity('payment')
export class Payment extends BaseEntity {
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
