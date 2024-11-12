
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({

    email: {
        type: String,
        required: true
    }     

});
// passport has been user for hashing and creating userid 
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);