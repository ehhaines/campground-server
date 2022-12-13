import mongoose from "mongoose";
import tripsSchema from "./trips-schema";

const tripsModel = mongoose.model(
  "TripsModel", tripsSchema
);

export default tripsModel;