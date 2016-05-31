var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alertSchema = new Schema({
    time: {
        type:String,
        required:true,
        unique:true
    },
    location:{
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

// the schema is useless so far
// we need to create a model using it
var Alert = db.model('alerts', userSchema); // first argument is collection name

// make this available to our users in our Node applications
module.exports = Alert;

