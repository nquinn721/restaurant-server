import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Restaurant } from './model/restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Crud({
  model: {
    type: Restaurant,
  },
})
@Controller('restaurant')
export class RestaurantController {
  constructor(public service: RestaurantService) {}
}
