import { Module } from '@nestjs/common';
import {
  CategoryController,
  ItemController,
  ModificationController,
  LocationController,
  SideController,
  ModificationTypeController,
} from './restaurant.controller';
import {
  CategoryService,
  ItemService,
  LocationService,
  ModificationService,
  SideService,
  ModificationTypeService,
} from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.entity';
import { Modification } from './models/modification.entity';
import { Item } from './models/item.entity';
import { Side } from './models/side.entitity';
import { Location } from './models/location.enitity';
import { ModificationType } from './models/modificationType.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Modification,
      ModificationType,
      Item,
      Side,
      Location,
    ]),
  ],
  controllers: [
    CategoryController,
    ItemController,
    LocationController,
    ModificationController,
    ModificationTypeController,
    SideController,
  ],
  providers: [
    CategoryService,
    ItemService,
    LocationService,
    ModificationService,
    ModificationTypeService,
    SideService,
  ],
})
export class RestaurantModule {}
