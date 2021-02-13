// Localhost
const express = require('express')
const app = express()
const port = 3000
var path = require('path');

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
  console.log(`Example app listening at http://localhost:${port}`)
});




// Pug
const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('public/template.pug');



// waneer je naar /pizza gaat gaat die een template laden
app.get('/pizza', (req, res) => {
  res.send(pug.renderFile('public/template.pug', {
  name: 'Timothy'
}))
})
