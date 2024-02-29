const mongoose = require("mongoose");

const keySchema = new mongoose.Schema({
    Username:{
        type:String
        // required:true
    },
    email:{
        type:String
        // required:true
    },
    Password:{
        type:String
    },
    suggestion:{
        type:String
        // required:true
    }

})

const Key = mongoose.model('Key',keySchema);
module.exports = Key;