import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Item } from './item.entity';
import { ModificationType } from './modificationType.entity';

@Entity('modification')
export class Modification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @ManyToOne(type => Item)
  item: any;

  @Column({ type: 'float', nullable: true })
  cost: number;

  @ManyToOne(
    type => ModificationType,
    modificationType => modificationType.mod,
  )
  type: any;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
