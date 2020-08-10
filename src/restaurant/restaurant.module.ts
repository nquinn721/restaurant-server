import { Module } from '@nestjs/common';
import {
  CategoryController,
  ItemController,
  ModificationController,
  LocationController,
  SideController,
} from './restaurant.controller';
import {
  CategoryService,
  ItemService,
  LocationService,
  ModificationService,
  SideService,
} from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.entity';
import { Modification } from './models/modification.entity';
import { Item } from './models/item.entity';
import { Side } from './models/side.entitity';
import { Location } from './models/location.enitity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Modification, Item, Side, Location]),
  ],
  controllers: [
    CategoryController,
    ItemController,
    LocationController,
    ModificationController,
    SideController,
  ],
  providers: [
    CategoryService,
    ItemService,
    LocationService,
    ModificationService,
    SideService,
  ],
})
export class RestaurantModule {}
