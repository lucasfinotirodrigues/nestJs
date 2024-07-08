// src/user/user.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: { username: string, password: string }): Promise<User> {
    return this.userService.create(createUserDto.username, createUserDto.password);
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User | undefined> {
    return this.userService.findOne(username);
  }
}
