import mongoose from "mongoose";

const tripsSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  parkCode: String,
  parkName: String,
  parkImage: String,
  startDate: String,
  endDate: String,
  notes: String,
  isCompleted: Boolean
}, {collection: "trips"});

export default tripsSchema;