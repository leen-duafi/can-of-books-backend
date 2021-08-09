'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const JWKSURI = process.env.JWKSURI;
const mongoose = require("mongoose");
const getbooks=require('./controllers/book');
const app = express();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
mongoose.connect(`${MONGO_DB_URL}/books`, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());

const PORT = process.env.PORT || 3001;



//................lab11.............................//


// const client = jwksClient({
//   jwksUri: JWKSURI

// });


app.get('/', (request, response) => {
  response.send('Hello World 🥳');
});

// function getKey(header, callback) {
//   client.getSigningKey(header.kid, function (err, key) {
//     var signingKey = key.publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   });
// }


// app.get('/test', (request, response) => {

//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   const token = request.headers.authorization.split(' ')[1];
//   console.log(token)
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt

//   jwt.verify(token, getKey, {}, (error, user) => {
//     if (error) {
//       response.send('invalid token');
//     }
//     response.json(user);
//   })

//   response.send("got your token ⭐");
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken  ////DONE////
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

// })

app.listen(PORT, () => console.log(`listening on ${PORT}`));

//...................................................................//



//...............................lab12.............................//

app.get('/books', (request, response) => {
  response.send('Lab 12 was done😌🎉🎊');
});

app.get('/books',getbooks);
