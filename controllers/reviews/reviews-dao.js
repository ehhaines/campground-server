import reviewsModel from "./reviews-model.js";

export const findReviewsByPark = async (currentParkCode) => {
  const matchingReviews = await reviewsModel.find({parkCode: currentParkCode});
  return matchingReviews.reverse();
}

export const createReview = async (newReview) => {
  const actualReview = await reviewsModel.create(newReview);
  return actualReview;
}

export const deleteReview = async (revID) => {
  await reviewsModel.deleteOne({_id: revID});
}
