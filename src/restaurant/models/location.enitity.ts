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
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  zip: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  lat: string;

  @Column({ nullable: true })
  lon: string;

  @Column({ nullable: true })
  sundayStart: string;
  @Column({ nullable: true })
  sundayEnd: string;
  @Column({ nullable: true })
  mondayStart: string;
  @Column({ nullable: true })
  mondayEnd: string;
  @Column({ nullable: true })
  tuesdayStart: string;
  @Column({ nullable: true })
  tuesdayEnd: string;
  @Column({ nullable: true })
  wednesdayStart: string;
  @Column({ nullable: true })
  wednesdayEnd: string;
  @Column({ nullable: true })
  thursdayStart: string;
  @Column({ nullable: true })
  thursdayEnd: string;
  @Column({ nullable: true })
  fridayStart: string;
  @Column({ nullable: true })
  fridayEnd: string;
  @Column({ nullable: true })
  saturdayStart: string;
  @Column({ nullable: true })
  saturdayEnd: string;

  @CreateDateColumn() public createdAt: Date;
  @UpdateDateColumn() public updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async beforeCreate() {
    const address = `${this.address} ${this.city} ${this.state} ${this.zip}`;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAvHC8FkiK6As9_tmLBrWz3NbTtJoQO6Uk`;
    const { data } = await axios.get(url);

    const obj = data?.results[0]?.geometry;

    this.lat = obj?.location?.lat;
    this.lon = obj?.location?.lng;
  }
}
