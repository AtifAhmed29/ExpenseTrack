import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { expenseMoudle } from './expense/expense.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:Iz7Dvski7V2VZIP3W3Lv@containers-us-west-37.railway.app:7248'),expenseMoudle],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
