// import { expenseRepository } from './expense.repository';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Expenses } from "./schemas/expenses.schema";
import { Model } from "mongoose";


@Injectable()
export class ExpenseService{
   
// constructor (private readonly expenseRepo:expenseRepository){}
constructor(@InjectModel(Expenses.name) private expenseModel: Model<Expenses>) {}

async findAll(): Promise<Expenses[]> {
    return this.expenseModel.find().exec();
  }
  
    getById(id ){
        return " expenses" +id;
    }
    getByDate(date){
        return "all "+ date;
    }
    async create(data): Promise<Expenses> {
        const createdExpense = new this.expenseModel(data);
        return createdExpense.save();
      }
    editExpense(id){
        return "edit "+ id;
    }
    deleteExpense(id){
        return "delete "+ id;
    }
}