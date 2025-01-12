const Expense = require('../Schema/expense'); 

const getExpenses = async (Request, Response) => {
    try {
        const expenses = await Expense.find().select('-userId');
        
        if (!expenses){
            return Response.status(404).send("No expenses Found"); 
        }

        return Response.status(201).json(expenses); 
    } catch (error) {
        console.log("could not connect", error); 
        Response.status(500).send({
            status: "error",
            message: error
        })
    }
     
}

module.exports = getExpenses; 