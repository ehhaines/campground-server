import mongoose from "mongoose";

const moderationsSchema = mongoose.Schema({
  ranger: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  parkCode: String
});

export default moderationsSchema;