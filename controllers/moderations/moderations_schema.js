import mongoose from "mongoose";

const moderationsSchema = mongoose.Schema({
  ranger: String,
  parkCode: String
}, {collection: "moderations"});

export default moderationsSchema;