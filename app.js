// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
//app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
	res.status(200).end(
		JSON.stringify(
			{
				"name":"Rogelio",
				"age":21,
				"passions":"Technology",
				"school":"UANL"
				
			},
			null,
			4

		)
	);
	
   })

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
