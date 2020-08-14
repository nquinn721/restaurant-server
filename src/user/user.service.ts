import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async create(user: any) {
    return await this.repo.save(user);
  }

  async update(email: string, user: any) {
    await createQueryBuilder()
      .update(User)
      .set(user)
      .where('email = :email', { email })
      .execute();
    return this.repo.findOne({ email });
  }
}
