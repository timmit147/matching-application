////// Variables //////

// Use dot env file
require('dotenv').config();

// Localhost
var express = require('express')
var app = express()
var port = process.env.PORT || 3000

// Use pug to use templates in website
var pug = require('pug');
app.set('view engine', 'pug')

// Send data with post
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.urlencoded());


// Connect database with .env username and password
var { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectID;
var client = new MongoClient(process.env.URL);

// Get info from database
var db;
// collection people
var col;
// Person info
var person;
// collection movies
var colm;
// Movie info
var movie;


////// Funtions //////

// Start localhost server 
app.listen(port, async () => {

    console.log(`Example app listening at http://localhost:${port}`);

    // Use all files in public
    app.use(express.static('public'));

    // When 404 send text page not found
    app.use(function(req, res, next) {
        res.status(404).send('Page not found');
    });

    // Get data from database
    await client.connect();
    console.log("Connected correctly to server");
    db = client.db("test");
    col = db.collection("people");
    person = await col.findOne();
    colm = db.collection("movies");
    movie = await colm.findOne();
});



// When going to profiel.html when node is running your wil be redirected to a dynamic template
app.get('/profiel.html', async (req, res) => {

    res.render('profiel', {
        name: person.name,
        age: person.age,
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })

});




// Render template changeinfo with database values 
app.get('/changeinfo', async (req, res) => {

    res.render('changeinfo', {
        name: person.name,
        age: person.age
    })
});

// Update name and age from database and render template again
app.post('/bedankt2', async (req, res) => {
    

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

    // Search a specific movie
    var movie = await col.find({ },{ moviename: 1 });

    res.render('changemovie', {
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })
});


// Add movie to database with form
app.post('/addmovie', async (req, res) => {
    

    // Add movie to database
    let personDocument = {
        "moviename": req.body.moviename,
        "movieimage": req.body.movieimage
    }

    const p = await colm.insertOne(personDocument);

    res.render('changemovie', {
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })
});

// Remove movie from database with form
app.post('/removemovie', async (req, res) => {

    colm.deleteOne(
            { moviename: req.body.moviename }
    )

    res.render('changemovie', {
        moviename: movie.moviename,
        movieimage: movie.movieimage
    })
});


