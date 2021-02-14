// Localhost
const express = require('express')
const app = express()
const port = 3000
var path = require('path');



// Pug
const pug = require('pug');

// save variable in txt
const fs = require('fs');

var a = 0;


app.get('/', (req, res) => {

	// localhost open index
	res.sendFile(path.join(__dirname + '/public/index.html'));


	// Use all files in public
 	app.use(express.static('public'));

 	// Funtion when 404 
	app.use(function(req, res, next){
		res.status(404).send('Page not found');
	});

});



app.listen(port, () => {

	  	// read file
	fs.readFile(__dirname + '/public/tekst.txt', 'utf8', function (err,data) {
	  if (err) {
	    a = 99;
	  }
	  a = data;
	});

  console.log(`Example app listening at http://localhost:${port}`);



});



// waneer je naar /pizza gaat gaat die een template laden
app.get('/pizza', (req, res) => {


// laat een template zien met variabel nummer
  res.send(pug.renderFile('public/template.pug', {
  		name: a
	}
	));



a = parseInt(a)+ 1;

fs.writeFile(__dirname + '/public/tekst.txt', a.toString(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!" + a.toString());
}); 





});
