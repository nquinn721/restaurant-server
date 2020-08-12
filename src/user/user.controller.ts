import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('user')
export class UserController {
  constructor(public service: UserService) {}
}
