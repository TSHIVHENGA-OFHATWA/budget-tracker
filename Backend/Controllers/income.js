const Income = require('../Schema/transactionSchema'); 


const createIncome = async (Request, Response) => {
    const { amount, category, description } = Request.body
    
    try {
        const income = new Income({
            Amount: amount, 
            Source: category, 
            Decription: description
        })

        await income.save(); 
        return Response.status(201).json({
            message: "income data added"
        }); 
    } catch (error) {
        console.log("could not add data ", error);
        return Response.status(500).json({
            message: "error sending data", 
            error: error
        });
    }
}

module.exports = createIncome; 