import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { HydratedDocument } from 'mongoose';

export type ExpenseDocument=HydratedDocument<Expenses>;

@Schema()
export class Expenses{
    @Prop({unique:true})
    id:string
    @Prop({required:true})
    title:string
    @Prop({required:true})
    ammount:number
    @Prop({required:true})
    date:string
    @Prop({required:true})
    category:string
    @Prop({required:true})
    notes:string
    

}
export const ExpensesSchema=SchemaFactory.createForClass(Expenses)