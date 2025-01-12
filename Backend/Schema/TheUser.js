const mongoose = require("mongoose");
const dataRegister = mongoose.Schema({
    Surname: String,
    Name: String,
    
    Email: {
        type: String,
        unique: true,
        required: true,
    },

    Phone: {
        type: String,
    },

    Password: {
        type: String,
        required: true,
    },

    ConfirmPass: {
        type: String,
        required: true,
    },

    CreatedAt: {
        type: Date,
        default: Date.now(),
    }
    
})

module.exports = mongoose.model("User", dataRegister);
