import { Injectable } from '@nestjs/common';
import { Restaurant } from './model/restaurant.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RestaurantService extends TypeOrmCrudService<Restaurant> {
  constructor(@InjectRepository(Restaurant) repo) {
    super(repo);
  }
}
