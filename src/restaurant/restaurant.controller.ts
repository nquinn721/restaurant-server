import { Controller } from '@nestjs/common';
import { Category } from './models/category.entity';
import { Crud } from '@nestjsx/crud';
import { CategoryService } from './restaurant.service';

@Crud({
  model: {
    type: Category,
  },
})
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}
}
