import { Controller, Post, Res, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from './models/user.entity';
import { UserService } from './user.service';
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_His9L7RGJvdVRuuPOkCeuand');
@Crud({
  model: {
    type: User,
  },
})
@Controller('user')
export class UserController {
  constructor(public service: UserService) {}

  @Post('checkout')
  async checkout(@Res() res) {
    console.log('hit end point');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/user/success',
      cancel_url: 'http://localhost:3000/user/cancel',
    });
    res.json({ id: session.id });
  }
  @Get('success')
  success() {
    console.log('success');
  }

  @Get('cancel')
  cancel() {
    console.log('cancel');
  }
}
