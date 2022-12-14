import mongoose from "mongoose";

const followsSchema = mongoose.Schema({
  follower: {type: String, required: true},
  following: {type: String, required: true},
}, {collection: "follows"});

export default followsSchema;