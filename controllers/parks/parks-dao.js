import parksModel from "./parks-model.js";

export const findParkByCode = async (currentParkCode) => {
  const actualPark = await parksModel.findOne({parkCode: currentParkCode});
  return actualPark;
}