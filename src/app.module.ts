import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { RestaurantModule } from './restaurant/restaurant.module';
import { Category } from './restaurant/models/category.entity';
import { Item } from './restaurant/models/item.entity';
import { Modification } from './restaurant/models/modification.entity';
import { Side } from './restaurant/models/side.entitity';
import { Location } from './restaurant/models/location.enitity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/models/order.entity';
import { OrderItemMod } from './order/models/orderItemMod.entity';
import { OrderItem } from './order/models/orderItem.entity';
import { OrderItemSide } from './order/models/orderItemSide.entity';
import { AppGateway } from './app.gateway';
const typeormOptions: any = {
  type: 'mysql',
  host: '104.196.139.6',
  port: 3306,
  username: 'root',
  password: 'Restaurant1234',
  database: 'restaurant',
  entities: [
    Category,
    Item,
    Location,
    Modification,
    Side,
    User,
    Order,
    OrderItemMod,
    OrderItem,
    OrderItemSide,
  ],
  logging: false,
  synchronize: true,
  extra: {},
};

if (process.env.NODE_ENV === 'production')
  typeormOptions.extra.socketPath =
    '/cloudsql/restaurant-server-288018:us-east1:restaurant';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOptions),
    RestaurantModule,
    AuthModule,
    UserModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
