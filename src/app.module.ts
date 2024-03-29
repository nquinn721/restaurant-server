import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { OrderPayment } from './order/models/orderPayment.entity';
import { ModificationType } from './restaurant/models/modificationType.entity';
import { GCloudStorageModule } from '@aginix/gcloud-storage';
import { MulterModule } from '@nestjs/platform-express';

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
    ModificationType,
    Side,
    User,
    Order,
    OrderItemMod,
    OrderItem,
    OrderItemSide,
    OrderPayment,
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
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
