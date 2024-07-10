import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    CarModule,
  ],
})
export class AppModule {}
