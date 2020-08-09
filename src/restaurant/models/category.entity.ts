import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
