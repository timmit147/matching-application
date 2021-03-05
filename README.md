![iPhone X, XS, 11 Pro – 29](https://user-images.githubusercontent.com/29665951/109518608-aec35d00-7aaa-11eb-8641-45633a293ffb.png)

This app wil match people based on their favorite movies.

# Wiki 
[wiki][wiki]

# Installation

To use this website you have to have ```NodeJS``` , ```git``` and ```npm``` on your terminal.

```bash
Instal git clone https://github.com/timmit147/matching-application.git
```
```bash
npm install
```


## Starting
To start the server type in the terminal:

```bash
nodemon run
```

## .env
Maak een database met:

**Database Name:** test

**Collection Name:** people

**Json:**
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

Create a .env file in matching-application dictionary and place the following code with your own database in this file.

```javascript
var url = "mongodb+srv://username:password@clustername.ubod1.mongodb.net/test";
module.exports = url;
```

Your done now and can use the website on your device.

## License
[Apache-2.0 License][License]

[wiki]:https://github.com/timmit147/matching-application/wiki
[License]:https://github.com/timmit147/matching-application/blob/main/LICENSE

