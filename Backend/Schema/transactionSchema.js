const mongoose = require("mongoose"); 


const incomeSchema =  mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    }, 
    Amount: {
        type: Number, 
        required: true, 
        min: 0
    }, 
    Source: {
        type: String, 
        enum: [
            "Salary",
            "Freelance", 
            "Investment",
            'Rental Income',
            'Business Income', 
            'Pension', 
            'Government Benefits', 
            'Bonus', 
            'Gift',
            'Other'
        ], // to prevent users from and typing errors or mistakes
        required: true
    },

    Description: {
        type: String, 
        maxlength: 1000
    },

    Date: {
        type: Date, 
        required: true, 
        default: Date.now()
    }

})


const Income = mongoose.model('Income', incomeSchema);

module.exports = Income
