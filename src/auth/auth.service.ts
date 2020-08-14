import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // This is for validation with login only
  async validateUser(email: string, pass: string): Promise<any> {
    console.log('validate', email, pass);

    const user = await this.usersService.findOne({ email });

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Used for jwt strategy
  async getUser(email: string, password?: string) {
    let user: any = await this.usersService.findOne({ email });

    console.log('get user', user);

    if (!user) user = await this.usersService.create({ email, password });

    if (user) {
      const { password, ...result } = user;
      return result;
    }
  }

  async validateGoogleAuth(email: string, password: string) {
    return await this.getUser(email, password);
  }

  async login(user: any) {
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
