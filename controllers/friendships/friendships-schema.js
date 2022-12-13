import mongoose from "mongoose";

const friendshipsSchema = mongoose.Schema({
  user1: {type: String, required: true},
  userImage1: String,
  user2: {type: String, required: true},
  userImage2: String,
  dateBefriended: String
}, {collection: "friendships"});

export default friendshipsSchema;