import { Controller, Get,Post,Put,Delete, Body, Param } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('/expense')
export class ExpenseController {
   
    constructor(private readonly expenseService: ExpenseService){}

    @Get('/all')
    getAllPatients(): any{
        return this.expenseService.findAll();
    }
    @Post('/expensesbydate')
    getByDate( @Body() data): any{
        return this.expenseService.getByDate(data);
    }
    @Post('/expensegraph')
    getByDateExpense( @Body() data): any{
        return this.expenseService.getByDateExpense(data);
    }
    @Get('/byid/:id')
    getById(@Param() id): any{
        return this.expenseService.getById(id);
    }
    @Put('/edit/:id')
    editExpense(@Param() id, @Body() data): any{
        return this.expenseService.editExpense(id,data);
    }
    @Delete('/delete/:id')
    deleteExpense(@Param() id): any{
        return this.expenseService.deleteExpense(id);
    }
    @Post('/add')
    setExpense(@Body() data): any{
        return this.expenseService.create(data);
    }

    
}

 
