import { Module } from "@nestjs/common";
import { Expenses, ExpensesSchema } from "./schemas/expenses.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ExpenseController } from "./expense.controller";
import { ExpenseService } from "./expense.service";

@Module({

    imports:[MongooseModule.forFeature([{name:Expenses.name, schema:ExpensesSchema}])],
    controllers: [ExpenseController],
  providers: [ExpenseService],
})


export class expenseMoudle{}