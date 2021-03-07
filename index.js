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

var ObjectId = require('mongodb').ObjectID;

const database = require("./.env");

const client = new MongoClient(database);


// find collection people


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


    const colm = db.collection("movies");

    movie = await colm.findOne();

    res.render('profiel', {
        name: person.name,
        age: person.age,
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })

    console.log(movie.moviename);
    console.log(movie.movieimage);


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

    col.updateOne(
   { _id: ObjectId("603fb9c67d5fab08997fc484") },
   {
     $inc: { 
        stock: 5 
    },
     $set: {
       name: req.body.name,
       age: req.body.age
     }
   }
)

    person = await col.findOne();

    res.render('changeinfo', {
        name: req.body.name,
        age: req.body.age
    })

});


// verander info pagina
app.get('/changemovie', async (req, res) => {

    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("movies");
    // Find one document
    person = await col.findOne();

    res.render('changemovie', {
        moviename: person.moviename,
        movieimage: person.movieimage
    })
});


app.post('/addmovie', async (req, res) => {
    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("movies");
    // Find one document
    person = await col.findOne();

    let personDocument = {
            "moviename": req.body.moviename,
            "movieimage": req.body.movieimage
        }
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(personDocument);

    res.render('changemovie', {
        moviename: person.moviename,
        movieimage: person.movieimage
    })
});


app.post('/removemovie', async (req, res) => {
    var person;

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    // Use the collection "people"
    const col = db.collection("movies");
    // Find one document
    person = await col.findOne();

console.log(req.body.moviename);

        col.deleteOne(
   { moviename: req.body.moviename }
)

    res.render('changemovie', {
        moviename: person.moviename,
        movieimage: person.movieimage
    })
});

console.log("removed movie");

// Start server info
app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);

    // Use all files in public
    app.use(express.static('public'));

    app.use(function(req, res, next) {
        res.status(404).send('Page not found');
    });


});