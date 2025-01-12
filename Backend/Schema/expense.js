const mongoose = require("mongoose"); 

const expenseSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }, 

    Amount: {
        type: Number,
        required: true, 
        min: 0 
    }, 

    Category: {
        type: String, 
        enum: [
            'Housing', 
            'Transportation', 
            'Food', 
            'Utilities', 
            'Insurance', 
            'Health', 
            'Entertainment', 
            'Clothing', 
            'Education', 
            'Debt Payment', 
            'Savings', 
            'Other'
        ],
        required: true
    }, 

    Description: {
        type: String, 
        maxlength: 1000
    },
    
    Date: {
        type: Date, 
        required: true, 
        default: Date.now
    }

    
})

const Expense = mongoose.model("Expense", expenseSchema); 

module.exports = Expense; 