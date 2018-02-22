const _ = require('lodash');

const express = require("express");
const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 


app.set("view engine", "hbs");

// app.use(express.static(__dirname + './style'));

const variousCompliments = require('./compliments');
const variousColors = require('./colors');

  app.listen(4000, () => {
    console.log('app listening on port 4000');
  })

  app.get('/', (req, res) => {
    var randomCompliment = _.sample(variousCompliments);
    var randomColor = _.sample(variousColors);
      res.render('index', {randomColor, randomCompliment});
  })

  app.post('/', (req, res) => {
    variousCompliments.push(req.body.meme)
    console.log(req.body.meme)
    res.redirect('/')
  })
  app.get("/:name", (req, res) => {
    var randomCompliment = _.sample(variousCompliments);
    var randomColor = _.sample(variousColors);
    var username = req.params.name;
    console.log(username);
    res.render('index', {randomColor, randomCompliment, username})
  })

  // app.post("/:add_compliment")


  // use inline styling
  // {{variable}}
  // use render index, whatever variable u want

  // re-randomize on every get request inside of line 23 function