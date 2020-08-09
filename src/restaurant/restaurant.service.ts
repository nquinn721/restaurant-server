import { Injectable } from '@nestjs/common';
import { Category } from './models/category.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) repo) {
    super(repo);
  }
}
