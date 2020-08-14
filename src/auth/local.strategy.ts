import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // This adds to the request object
  async validate(username: string, password: string): Promise<any> {
    let user;
    if (password !== 'googleauth')
      user = await this.authService.validateUser(username, password);
    else user = await this.authService.validateGoogleAuth(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
