import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurant')
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'string', nullable: true })
  name: string;
}
