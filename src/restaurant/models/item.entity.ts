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
import { Category } from './category.entity';
import { Modification } from './modification.entity';

@Entity('item')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'float', nullable: true })
  cost: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(type => Category)
  category: Category;

  @OneToMany(
    type => Modification,
    modification => modification.item,
  )
  modifications: any[];

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
