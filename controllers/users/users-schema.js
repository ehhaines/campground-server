import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    bio: String,
    location: {type: String, default: ''},
    isBanned: {type: Boolean, default: false},
    type: {type: String, enum: ['USER', 'RANGER', 'ADMIN'], default: 'USER'}
}, {collection: 'users'})

export default usersSchema