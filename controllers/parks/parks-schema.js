import mongoose from "mongoose";

const parksSchema = mongoose.Schema({
  fullName: {type: String, required: true, unique: true},
  shortName: String,
  parkCode: {type: String, required: true, unique: true},
  description: String,
  weather: String,
  city: String,
  state: String,
  statesSpanned: String,
  image: String
});

export default parksSchema;