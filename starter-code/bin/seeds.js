
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

//array of 3 objects, each with 
//name, occupation and catchPhrase for our initial celebrities.

const celebArray = [
  {
    name: 'Tom Cruise',
    occupation : 'actor',
    catchPhrase: 'show me the money',
  
  },
  {
    name: 'Beyonce',
    occupation : 'singer',
    catchPhrase: 'all the single ladies',
  }, 
  {
    name: 'Ronaldo',
    occupation : 'athlete',
    catchPhrase: 'sssssiiiiiiiiiiiiii',
  }, 
];

Celebrity.create(celebArray, () => {
  console.log ('created celebrity');
}) 

