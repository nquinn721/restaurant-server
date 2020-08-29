import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { User } from '../../user/models/user.entity';

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => User)
  user: User;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
