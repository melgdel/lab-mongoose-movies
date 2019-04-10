const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SCHEMA 
const celebritySchema = new Schema ({
    name: 'String',
    occupation : 'String',
    catcPhrase : 'String',
   });

const Celebrity =mongoose.model('Celebrity',celebritySchema);

//EXPORT CELEBRITY MODEL 
module.exports = Celebrity;