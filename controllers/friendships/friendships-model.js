import mongoose from "mongoose";
import friendshipsSchema from "./friendships-schema.js";

const friendshipsModel = mongoose.model(
  "FriendshipsModel", friendshipsSchema
);

export default friendshipsModel;