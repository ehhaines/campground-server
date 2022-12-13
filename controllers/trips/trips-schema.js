import mongoose from "mongoose";

const tripsSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  startDate: String,
  endDate: String,
  notes: String,
  isCompleted: Boolean
});

export default tripsSchema;