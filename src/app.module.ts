import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { expenseMoudle } from './expense/expense.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:GpOK0Z3ORUfNBqP9FLnK@containers-us-west-179.railway.app:7008'),expenseMoudle],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
