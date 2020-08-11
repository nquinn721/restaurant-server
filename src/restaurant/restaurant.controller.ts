import { Controller } from '@nestjs/common';
import { Category } from './models/category.entity';
import { Crud } from '@nestjsx/crud';
import {
  CategoryService,
  ItemService,
  LocationService,
  ModificationService,
  SideService,
} from './restaurant.service';
import { Item } from './models/item.entity';
import { Location } from './models/location.enitity';
import { Modification } from './models/modification.entity';
import { Side } from './models/side.entitity';

@Crud({
  model: {
    type: Category,
  },
})
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}
}

@Crud({
  model: {
    type: Item,
  },
  query: {
    join: {
      category: {},
    },
  },
})
@Controller('item')
export class ItemController {
  constructor(public service: ItemService) {}
}

@Crud({
  model: {
    type: Location,
  },
})
@Controller('location')
export class LocationController {
  constructor(public service: LocationService) {}
}

@Crud({
  model: {
    type: Modification,
  },
})
@Controller('modification')
export class ModificationController {
  constructor(public service: ModificationService) {}
}

@Crud({
  model: {
    type: Side,
  },
})
@Controller('side')
export class SideController {
  constructor(public service: SideService) {}
}
