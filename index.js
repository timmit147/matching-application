// Localhost
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// Pug
const pug = require('pug');

app.set('view engine', 'pug')


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.urlencoded());

var name = "jon";
var age = "22";

// profiel pagina
app.get('/', (req, res) => {

    res.render('profiel', {
        name: name,
        age: age
    })


});



// verander info pagina
app.get('/changeinfo', (req, res) => {

    res.render('changeinfo', {
        name: name,
        age: age
    })
});

// app get name
app.get('/bedankt', (req, res) => {
    name = req.query.name;
    res.render('changeinfo', {
        name: name,
        age: age
    })

});


// app post age
app.post('/bedankt2', (req, res) => {
    age = req.body.age;
    res.render('changeinfo', {
        name: name,
        age: age
    })

});


app.listen(port, () => {


    console.log(`Example app listening at http://localhost:${port}`);

    // Use all files in public
    app.use(express.static('public'));

    app.use(function(req, res, next) {
        res.status(404).send('Page not found');
    });


});



// waneer je naar /pizza gaat gaat die een template laden
app.get('/test', function(req, res) {


})