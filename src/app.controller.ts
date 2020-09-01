import { Controller, Get, UseGuards, Post, Body, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get()
  home(): string {
    return 'Homess';
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() user: any, @Req() req) {
    if (!req.user.firstname && user.givenName) {
      user = await this.userService.update(user.email, {
        firstname: user.givenName,
        lastname: user.familyName,
        photoUrl: user.photoUrl,
      });
    }

    return {
      ...(await this.authService.login(user)),
      user: req.user,
    };
  }
}
