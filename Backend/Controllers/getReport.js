const Expense = require('../Schema/expense');
const Income = require('../Schema/transactionSchema'); 


const generateReport = async (Request, Response) => {
    try {
        const firstDate = new Date(year, month -1,1); 
        const endDate = new Date(year, month, 0); 

        const expenses = await Expense.Find({
            userId, 
            Date: {$gte: startDate, $lte: endDate}
        }); 

        const incomes = await Income.find({
            userId, 
            Date: {$gte: startDate, $lte: endDate} 
        }); 

        const totalExpense = expenses.reduce((sum, expense)=> sum + expense.amount, 0); 
        const totalIncome = incomes.reduce((sum, income)=> sum + income.amount, 0); 


        const report = {
            month: `${firstDate.toLocalString('default', {month: 'long'})} ${year}`, 
            totalExpense,
            totalIncome,
            balance: totalIncome - totalExpense, 
            expenses: expenses.map((expense)=>({
                amount: expense.amount,
                category: expense.category, 
                date: expense.date,
                description: expense.description
            })), 

            incomes: incomes.map((income) => ({
                amount: income.amount, 
                source:income.source, 
                date: income.date, 
                description: income.description
            }))
        }

        return Response.status(200).json({
            status: 'ok',
            data: report 
        })
    } catch (error) {
       return Response.status(500).send("No Data") 
    }
}

module.exports = generateReport; 