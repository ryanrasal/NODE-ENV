const express = require("express");
const app = express();
const port = process.env.APP_PORT || 5000;

require('dotenv').config()

const welcome = (req, res) => {
    res.send(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);
  };

app.get("/", welcome)


  app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });