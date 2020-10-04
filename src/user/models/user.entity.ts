import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EncryptedColumn } from 'typeorm-encrypted-column';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  admin: boolean;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  zip: string;

  @EncryptedColumn({
    encrypt: {
      key: 'd85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da',
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      looseMatching: false, // If true existance of the column will not be checked.
    },
    nullable: true,
    default: '',
  })
  password: string;

  @Column({ nullable: true })
  mac: string;

  @Column({ nullable: true })
  pushToken: string;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;
}
