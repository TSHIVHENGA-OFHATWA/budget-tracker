const express = require("express"); 
const UserRegister = require("./Controllers/register.js")
const TheLoginUser = require("./Controllers/Thelogin.js");
const dataofuser = require('./Controllers/UserInfo.js'); 
const createExpense = require('./Controllers/Expenses.js');
const generateReport = require('./Controllers/getReport.js'); 
const createIncome = require('./Controllers/income.js');  
const getExpenses = require('./Controllers/getAllExpenses.js'); 

const router = express.Router();

router.post("/register", UserRegister);
router.post("/user-info", dataofuser); 
router.post("/logs", TheLoginUser);
router.post('/expense-data', createExpense);
router.post('/income-data', createIncome); 
router.get('/get-report', generateReport);
router.get('/get-expenses', getExpenses);  


module.exports = router;
