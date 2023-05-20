import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { expenseMoudle } from './expense/expense.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),expenseMoudle],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
