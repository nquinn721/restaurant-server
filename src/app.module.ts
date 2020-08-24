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
const typeormOptions: any = {
  type: 'mysql',
  host: '35.237.213.78',
  port: 3306,
  username: 'root',
  password: 'Restaurant1234',
  database: 'restaurant',
  entities: [Category, Item, Location, Modification, Side, User],
  logging: false,
  synchronize: true,
  extra: {},
};

if (process.env.NODE_ENV === 'production')
  typeormOptions.extra.socketPath =
    '/cloudsql/elevated-column-284822:us-east1:restaurant';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOptions),
    RestaurantModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
