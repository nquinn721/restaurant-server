import { Module } from '@nestjs/common';
import { CategoryController } from './restaurant.controller';
import { CategoryService } from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class RestaurantModule {}
