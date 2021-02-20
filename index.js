// Localhost
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// Pug
const pug = require('pug');

app.set('view engine', 'pug')


const movies = [
  { "id": "black-panther", "name": "Black Panther", "year": 2018, "categories": ["action","adventure","sci-fi"],"storyline": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."},
  { "id": "incredibles-3", "name": "Incredibles 2", "year": 2018, "categories": ["animation","action","adventure"],"storyline": "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil. Written by Kenneth Chisholm (kchishol@rogers.com)"},
  { "id": "halloween", "name": "Halloween", "year": 2018, "categories": ["horror","thriller"],"storyline": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."},
  { "id": "ad-astra", "name" : "Ad Astra", "year" : 2019, "categories" : ["adventure","fantasy","mystery","thriller","sci-fi"], "storyline" : "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe."},
  { "id": "toy-story-4", "name" : "Toy Story 4", "year" : 2019, "categories" : ["animation","adventure","comedy","family","fantasy"],  "storyline" : "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."}
];

app.get('/', (req, res) => {

	  res.render('profiel', { 
  	title: 'Films', 
  	message: 'Zoek je favorieten films om een match te maken.',
  	movies
  })


});

app.get('/bedankt', (req, res) => {
var name = req.query.name;
    res.render('bedankt', { 
      title: name, 
  })


});



app.get('/changeinfo', (req, res) => {

	  res.render('changeinfo', { 
  	title: 'Films', 
  	message: 'Zoek je favorieten films om een match te maken.',
  	movies
  })


});





app.listen(port, () => {


  console.log(`Example app listening at http://localhost:${port}`);

	// Use all files in public
 	app.use(express.static('public'));

 		app.use(function(req, res, next){
		res.status(404).send('Page not found');
	});


});



// waneer je naar /pizza gaat gaat die een template laden
app.get('/test', function (req, res) {
	

})