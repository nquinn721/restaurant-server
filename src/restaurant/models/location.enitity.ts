import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import axios from 'axios';

@Entity('location')
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  lat: string;

  @Column({ nullable: true })
  lon: string;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async beforeCreate() {
    const address = this.address1 + ' ' + this.address2;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAvHC8FkiK6As9_tmLBrWz3NbTtJoQO6Uk`;
    const { data } = await axios.get(url);

    const obj = data?.results[0]?.geometry;

    this.lat = obj?.location?.lat;
    this.lon = obj?.location?.lng;
  }
}
