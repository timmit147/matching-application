![iPhone X, XS, 11 Pro – 29](https://user-images.githubusercontent.com/29665951/109518608-aec35d00-7aaa-11eb-8641-45633a293ffb.png)

This app wil match people based on their favorite movies. There are 3 main pages match where you can find a match based on favorite movies chat where you can comunicate with people with the same intrest and profiel where you can update your name, age and favorite movies. 

The feature I have made is a form where you can update your users name and age and the user can add and remove movies in the database.

To want to see the app live without a database go to [matching-application][matching-application].

# Wiki 
If you want to know more about the project you can go to the [wiki][wiki].

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

**Collection Name:** movies

**Json:** Add [Json files][Json files] to database.

## .env

Create a .env file in matching-application dictionary and place the following code with your own database in this file.

Change the username, password and clustername with your own mongodb database.

```javascript
URL =  mongodb+srv://username:password@clustername.ubod1.mongodb.net/test
```

## Starting local server
To start the server type in the terminal:

```bash
npm start
```

go to http://localhost:3000/

Your done now and can use the website on your device.

## License
[Apache-2.0 License][License]

[wiki]:https://github.com/timmit147/matching-application/wiki
[License]:https://github.com/timmit147/matching-application/blob/main/LICENSE
[matching-application]:https://timmit147.github.io/matching-application/public/index.html
[Json files]:https://github.com/timmit147/matching-application/tree/main/json

