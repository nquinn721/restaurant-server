import { Controller, Post, Res, Get, Body, Req } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import Stripe from 'stripe';
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')('sk_test_His9L7RGJvdVRuuPOkCeuand');
const stripe = new Stripe('sk_test_His9L7RGJvdVRuuPOkCeuand', {
  apiVersion: '2020-08-27',
});
@Crud({
  model: {
    type: User,
  },
})
@Controller('user')
export class UserController {
  constructor(public service: UserService) {}

  @Post('checkout')
  async checkout(@Body() { token, total }, @Res() res) {
    await stripe.charges.create({
      amount: total * 100,
      currency: 'usd',
      description: 'cool',
      source: token,
    });
    res.send({ success: true });
  }
  @Get('success')
  success() {
    console.log('successss');
  }

  @Get('cancel')
  cancel() {
    console.log('cancel');
  }
}
