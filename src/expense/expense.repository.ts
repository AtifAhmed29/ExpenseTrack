// import { Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { ExpenseDocument, Expenses } from "./schemas/expenses.schema";
// import { Model } from "mongoose";

// @Injectable()
// export class expenseRepository{
//     constructor(@InjectModel(Expenses.name) private expenseModel: Model<ExpenseDocument>){}


//    async create(expense: Expenses): Promise<Expenses>{
//         const newExpense= new this.expenseModel(expense);
//         return newExpense.save();
//     }
// }