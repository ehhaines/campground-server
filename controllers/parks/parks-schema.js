import mongoose from "mongoose";

const parksSchema = mongoose.Schema({
  fullName: {type: String, required: true, unique: true},
  parkCode: {type: String, required: true, unique: true},
  description: String,
  city: String,
  state: String,
  statesSpanned: String,
  image: String
});

export default parksSchema;