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
    return this.expenseModel.find().select('day ammount date');
  }
  
  async  getById(id ) {
 
    
      return await this.expenseModel.findOne({_id:id.id});
    }
 async   getByDate(date):Promise<Expenses[]> {
        const transection= await this.expenseModel.find({date:{$gte:date.min,$lte:date.max}}).sort([['date',1]])
        return transection
    }
 async   getByDateExpense(date):Promise<Expenses[]> {
        return await this.expenseModel.find({date:{$gt:date.min,$lt:date.max}}).select('category ammount')
    }

    async create(data): Promise<Expenses> {
        const createdExpense = new this.expenseModel(data);
        return createdExpense.save();
      }
   async editExpense(id,data){
        return await this.expenseModel.updateOne({_id:id.id},{$set:{category:data.category, title:data.title,ammount:data.ammount,date:data.date }});
    }
  async  deleteExpense(id){
        return  await this.expenseModel.deleteOne({_id:id.id});
    }
}