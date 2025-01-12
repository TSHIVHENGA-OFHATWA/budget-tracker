const Expense = require('../Schema/expense'); 

const createExpense = async (Request, Response) => {
    const { userId, amount, category, description } = Request.body;

    try {
        const expense = new Expense({
            userId, 
            Amount: amount, 
            Category: category,
            Description: description, 
        })
        await expense.save(); 
        return Response.status(201).json({
            message: "Expense Saved"
        })
    } catch (error) {
        console.log("Error saving expenses", error)
        return Response.status(500).json({
            message: "Error saving data", 
            error: error
        })
    }
    
}

module.exports = createExpense; 