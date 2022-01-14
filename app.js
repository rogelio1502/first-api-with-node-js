// create an express app
const express = require("express")
const app = express()

const db = require('./db');

// use the express-static middleware
//app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
	console.log("Hola mundo");
	db.connection().then(
		(value) => {
			let response = {
				"Connection" : "OK"
			}
			if(value == false){
				response.Connection = "Failed";
			}

			
			res.status(200).json(response);

		}
	)
	
   })

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
