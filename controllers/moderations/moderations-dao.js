import moderationsModel from "./moderations-model.js";

export const findModerationsByPark = (park) =>
  moderationsModel.find({parkCode: park});

export const findModerationsByUser = ranger => 
  moderationsModel.find({ranger: ranger});

export const createModeration = (moderation) =>
  moderationsModel.create(moderation);

export const unMod = (username) =>
  moderationsModel.deleteOne({ranger: username});
