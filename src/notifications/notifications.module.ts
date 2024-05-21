import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationService } from './notifications.service';
import { NotificationController } from './notifications.controller';
import { Notification } from './notification.entity';
import { UsersModule } from '../users/users.module';
import { LocalUser } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, LocalUser]), UsersModule],
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
