import mongoose from "mongoose";

const followsSchema = mongoose.Schema({
  follower: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  following: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: "follows"});

export default followsSchema;