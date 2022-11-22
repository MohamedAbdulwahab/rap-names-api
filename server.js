// require (import) express
const express = require('express');

// set all the properties/methods of express to app. 
const app = express();

// set port to 8000
const PORT = 8000;

// object to be served from the API.
const rappers = {
	'21 savage': {
		name: 'Shéyaa Bin Abraham-Joseph', 
		age: 29, 
		birthLocation: 'London, England'
	},
	'chance the rapper': {
		name: 'Chancelor Bennett', 
		age: 29, 
		birthLocation: 'Chicago, Illinois, US'
	}, 
	'unknown': {
		name: 'unknown', 
		age: 0, 
		birthLocation: 'unknown'
	}
}

// make a get (read) request once user requests the main page. 
app.get('/', (request, response) => {
	// start looking for '/index.html' from the current (root) directory and send it as a response.
	response.sendFile(__dirname + '/index.html');
});

// make a get (read) request to /api route.
app.get('/api', (request, response) => {
	// response with the entire rappers object (in json from). 
	response.json(rappers);
}); 

// make a get (read) request to /api/any-name route.
app.get('/api/:name', (request, response) => {
	// get the parameter added by the user and store it in rapperName.
	const rapperName = request.params.name.toLowerCase();

	// if the name exists in the rappers object
	if(rappers[rapperName]) {
		// response with the rappers info. 
		response.json(rappers[rapperName]);
	} else { // if the name does not exist in the rappers object.
		// response with the unknown property. 
		response.json(rappers['unknown']);
	}
});

app.listen(process.env.PORT || PORT, (request, response) => {
	console.log('The server is now running. Better go catch it! (HAHA!!)');
});