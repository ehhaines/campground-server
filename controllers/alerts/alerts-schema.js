import mongoose from "mongoose";

const alertsSchema = mongoose.Schema({
  ranger: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  parkCode: String,
  datePosted: String,
  alert: String,
}, {collection: "alerts"});

export default alertsSchema;