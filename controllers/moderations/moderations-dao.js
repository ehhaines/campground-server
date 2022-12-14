import moderationsModel from "./moderations-model.js";

export const findModerationsByPark = (park) =>
  moderationsModel.find({parkCode: park});

export const findModerationsByUser = (user) =>
  moderationsModel.find({user: ObjectId(user)});

export const createModeration = (moderation) =>
  moderationsModel.create(moderation);
