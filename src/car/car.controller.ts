import { Controller, Post, Body, Get } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }
}
