import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    location: {type: String, default: ''},
    phone: {type: String, default: '0000000000'},
    // dateOfBirth: {type: Date, default: '01/01/2000'},
    friendsList: {type: String}

}, {collection: 'users'})

export default usersSchema