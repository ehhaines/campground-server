import mongoose from "mongoose";
import alertsSchema from "./alerts-schema.js";

const alertsModel = mongoose.model(
  "AlertsModel", alertsSchema
);

export default alertsModel;