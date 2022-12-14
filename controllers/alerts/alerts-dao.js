import alertsModel from "./alerts-model.js";

export const findAlertsByPark = park => 
  alertsModel.find({parkCode: park});

export const findAlertsByRanger = ranger => 
  alertsModel.find({ranger: ObjectId(ranger)});

export const resolveAlert = alertID => 
  alertsModel.deleteOne({_id : alertID});

export const createAlert = (alert) => 
  alertsModel.create(alert);