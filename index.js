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

// profiel pagina
app.get('/profiel.html', async (req, res) => {

    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("people");
    // Find one document
    person = await col.findOne();

    res.render('profiel', {
        name: person.name,
        age: person.age
    })


});



// verander info pagina
app.get('/changeinfo', async (req, res) => {

    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("people");
    // Find one document
    person = await col.findOne();

    res.render('changeinfo', {
        name: person.name,
        age: person.age
    })
});



// app post name and age
app.post('/bedankt2', async (req, res) => {
    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("people");
    // Find one document

// update person age and name
    col.updateOne({ }, { $set: { age: req.body.age, name: req.body.name } })

    person = await col.findOne();

    // Goed voorbeeld https://kb.objectrocket.com/mongo-db/mongodb-updateone-431

    res.render('changeinfo', {
        name: req.body.name,
        age: req.body.age
    })

});


// Start server info
app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);

    // Use all files in public
    app.use(express.static('public'));

    app.use(function(req, res, next) {
        res.status(404).send('Page not found');
    });


});