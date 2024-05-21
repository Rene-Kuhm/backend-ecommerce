import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentService } from './payments.service';
import { PaymentController } from './payments.controller';
import { Payment } from './payment.entity';
import { LocalUser } from '../users/user.entity';
import { Order } from '../orders/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, LocalUser, Order])],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
