// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    _id: String, //email
    password: String, //SHA hash, not string
    settings: {
        //alert preferences, etc.
    },
    phone_number: String,
    // primary_numbers: [{
    //     number: String
    // }],
    // secondary_numbers: [{
    //     number: String
    // }],
    devices: [{
        device_id: String, //Comes with device (randomly generated)
        device_name: String, //Set by user
        secret_key: String, //Would be given to device by server when registered
        armed: Boolean
    }],
    alerts: [{
        device_id: String,
        time_stamp: Date,
        responded: Boolean
        //picture: Image
    }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;