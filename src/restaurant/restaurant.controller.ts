import {
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
} from '@nestjs/common';
import { Category } from './models/category.entity';
import { Crud } from '@nestjsx/crud';
import {
  CategoryService,
  ItemService,
  LocationService,
  ModificationService,
  SideService,
  ModificationTypeService,
} from './restaurant.service';
import { Item } from './models/item.entity';
import { Location } from './models/location.enitity';
import { Modification } from './models/modification.entity';
import { ModificationType } from './models/modificationType.entity';
import { Side } from './models/side.entitity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import {
  GCloudStorageFileInterceptor,
  UploadedFileMetadata,
} from '@aginix/gcloud-storage';
@Crud({
  model: {
    type: Category,
  },
})
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}

  @Post('img')
  @UseInterceptors(GCloudStorageFileInterceptor('file'))
  createOne(@UploadedFile() file: UploadedFileMetadata) {
    console.log(file);
  }
}

@Crud({
  model: {
    type: Item,
  },
  query: {
    join: {
      category: {},
      mods: {},
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
  query: {
    join: {
      item: {},
      type: {
        eager: true,
      },
    },
  },
})
@Controller('modification')
export class ModificationController {
  constructor(public service: ModificationService) {}
}

@Crud({
  model: {
    type: ModificationType,
  },
  query: {
    join: {
      item: {},
      type: {},
    },
  },
})
@Controller('modification-type')
export class ModificationTypeController {
  constructor(public service: ModificationTypeService) {}
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
