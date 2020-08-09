import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '35.237.213.78',
  port: 3306,
  username: 'root',
  password: 'Restaurant1234',
  database: 'restaurant',
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  logging: false,
  synchronize: true,
};
