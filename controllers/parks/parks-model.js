import mongoose from "mongoose";
import parksSchema from "./parks-schema.js";

const parksModel = mongoose.model(
  "ParksModel", parksSchema
);

export default parksModel;