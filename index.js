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


// Connect met database
const { MongoClient } = require("mongodb");

const database = require("./.env");

const client = new MongoClient(database);


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


// The database to use
var person;
async function run() {

}

// app post age
app.post('/bedankt2', async (req, res) => {
    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("people");
    // Find one document
    person = await col.findOne();
    // Print to the console
    console.log(person.name);


    // Construct a document                                                                                                                                                              
    let personDocument = {
        "name": req.body.name,
        "age": req.body.age
    }
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);

    res.render('changeinfo', {
        name: person.name,
        age: person.age
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