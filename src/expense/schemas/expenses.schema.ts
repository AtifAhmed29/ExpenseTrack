import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { HydratedDocument } from 'mongoose';

export type ExpenseDocument=HydratedDocument<Expenses>;

@Schema()
export class Expenses{
    
    @Prop()
    title:string
    @Prop()
    ammount:number
    @Prop()
    date:Date
    @Prop()
    day:string
    @Prop()
    category:string
    @Prop()
    notes:string
    

}
export const ExpensesSchema=SchemaFactory.createForClass(Expenses)