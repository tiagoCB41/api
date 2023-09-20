import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersModule  } from './users.module';

@Controller('users')
export class UsersController {
  private users: UsersModule [] = [];

  @Get()
  findAll(): UsersModule [] {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string): UsersModule  {
    return this.users.find(user => user.id === +id);
  }

  @Post()
  create(@Body() user: UsersModule ): UsersModule  {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedUser: UsersModule ): UsersModule  {
    const index = this.users.findIndex(user => user.id === +id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    } else {
      throw new Error('User not found');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    const index = this.users.findIndex(user => user.id === +id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return 'User deleted successfully';
    } else {
      throw new Error('User not found');
    }
  }
}
