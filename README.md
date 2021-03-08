![iPhone X, XS, 11 Pro – 29](https://user-images.githubusercontent.com/29665951/109518608-aec35d00-7aaa-11eb-8641-45633a293ffb.png)

This app wil match people based on their favorite movies. There are 3 main pages match where you can find a match based on favorite movies chat where you can comunicate with people with the same intrest and profiel where you can update your name, age and favorite movies. 

The feature I have made is a form where you can update your users name and age and the user can add and remove movies in the database.

To watch the website live without a database go to [matching-application][matching-application].

# Wiki 
If you want to know more about the project you can got to the [wiki][wiki].

# Installation

To use this website you have to have ```NodeJS``` , ```git``` and ```npm``` in your terminal.

```bash
Instal git clone https://github.com/timmit147/matching-application.git
```
```bash
npm install
```

## Database

Maak een database met:

**Database Name:** test

**Collection Name:** people

**Json:**

place the json file in your database.

```json
[{
  "_id": {
    "$oid": "603fb9c67d5fab08997fc484"
  },
  "name": "tim",
  "age": "23",
  "stock": 130
}]
```
## .env

Create a .env file in matching-application dictionary and place the following code with your own database in this file.

Change the username, password and clustername with your own database.

```javascript
var url = "mongodb+srv://username:password@clustername.ubod1.mongodb.net/test";
module.exports = url;
```

## Starting local server
To start the server type in the terminal:

```bash
nodemon run
```

go to http://localhost:3000/

Your done now and can use the website on your device.

## License
[Apache-2.0 License][License]

[wiki]:https://github.com/timmit147/matching-application/wiki
[License]:https://github.com/timmit147/matching-application/blob/main/LICENSE
[matching-application]:https://timmit147.github.io/matching-application/public/index.html

