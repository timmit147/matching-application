// Localhost
const express = require('express')
const app = express()
const port = 3000

// Use pug to use templates in website
const pug = require('pug');
app.set('view engine', 'pug')

// Send data with post
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.urlencoded());


// Connect database with .env username and password
const { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectID;
const database = require("./.env");
const client = new MongoClient(database);


// Start localhost server 
app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);
    // Use all files in public
    app.use(express.static('public'));
    app.use(function(req, res, next) {
        res.status(404).send('Page not found');
    });


});



// When going to profiel.html when node is running your wil be redirected to a dynamic template
app.get('/profiel.html', async (req, res) => {

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("people");
    var person = await col.findOne();

    const colm = db.collection("movies");
    movie = await colm.findOne();

    res.render('profiel', {
        name: person.name,
        age: person.age,
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })

});




// Render template changeinfo with database values 
app.get('/changeinfo', async (req, res) => {

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("people");
    var person = await col.findOne();

    res.render('changeinfo', {
        name: person.name,
        age: person.age
    })
});

// Update name and age from database and render template again
app.post('/bedankt2', async (req, res) => {
    
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("people");
    var person = await col.findOne();

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

    res.render('changeinfo', {
        name: req.body.name,
        age: req.body.age
    })

});


// Render template with movies name and image url
app.get('/changemovie', async (req, res) => {

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("movies");
    var movie = await col.find({ },{ moviename: 1 });

    res.render('changemovie', {
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })
});


// Add movie to database with form
app.post('/addmovie', async (req, res) => {
    
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("movies");
    var movie = await col.findOne();

    // Add movie to database
    let personDocument = {
        "moviename": req.body.moviename,
        "movieimage": req.body.movieimage
    }

    const p = await col.insertOne(personDocument);

    res.render('changemovie', {
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })
});

// Remove movie from database with form
app.post('/removemovie', async (req, res) => {
    
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("test");
    const col = db.collection("movies");
    var movie = await col.findOne();

    col.deleteOne(
            { moviename: req.body.moviename }
    )

    res.render('changemovie', {
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })
});


