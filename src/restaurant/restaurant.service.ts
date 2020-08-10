import { Injectable } from '@nestjs/common';
import { Category } from './models/category.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './models/item.entity';
import { Location } from './models/location.enitity';
import { Modification } from './models/modification.entity';
import { Side } from './models/side.entitity';

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) repo) {
    super(repo);
  }
}

@Injectable()
export class ItemService extends TypeOrmCrudService<Item> {
  constructor(@InjectRepository(Item) repo) {
    super(repo);
  }
}

@Injectable()
export class LocationService extends TypeOrmCrudService<Location> {
  constructor(@InjectRepository(Location) repo) {
    super(repo);
  }
}

@Injectable()
export class ModificationService extends TypeOrmCrudService<Modification> {
  constructor(@InjectRepository(Modification) repo) {
    super(repo);
  }
}

@Injectable()
export class SideService extends TypeOrmCrudService<Side> {
  constructor(@InjectRepository(Side) repo) {
    super(repo);
  }
}
