import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationService } from './notifications.service';
import { NotificationController } from './notifications.controller';
import { Notification } from './notification.entity';
import { LocalUser } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, LocalUser])],
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
