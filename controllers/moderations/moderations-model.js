import mongoose from "mongoose";
import moderationsSchema from "./moderations_schema.js";

const moderationsModel = mongoose.model(
  "ModerationsModel", moderationsSchema
);

export default moderationsModel;