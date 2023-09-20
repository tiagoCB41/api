// users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule {
  id: number;
  username: string;
  email: string;
}
