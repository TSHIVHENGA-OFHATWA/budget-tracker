const express = require("express");
const app = express();
require("dotenv").config();
const router = require('./router.js'); 

const dbconnection = require('./connectingdb.js'); 

const port = 3100;

const cors = require('cors');
app.use(cors()); // This will allow cross-origin requests


app.use(express.json());
app.use('/api', router); 

app.get("/sta", (request, response) => {
	return response.send({
		message: "all is good"
	})
});

dbconnection();
app.listen(port, ()=>{
    console.log(`server now listening on port: ${port}`); 
})
