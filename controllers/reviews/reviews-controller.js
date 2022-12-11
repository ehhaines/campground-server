import * as reviewsDao from "./reviews-dao.js";

const ReviewsController = (app) => {

  const findReviewsByPark = async (req, res) => {
    const parkCode = req.params['park'];
    const matchingReviews = await reviewsDao.findReviewsByPark(parkCode);
    res.json(matchingReviews);
  }

  const createReview = async (req, res) => {
    const newReview = req.body;
    const actualReview = await reviewsDao.createReview(newReview);
    res.send(actualReview);
  }

  const deleteReview = async (req, res) => {
    const review = req.body;
    await reviewsDao.deleteReview(review._id);
    res.send(review);
  }

  app.get("/reviews/:park", findReviewsByPark);
  app.post("/reviews", createReview);
  app.delete("/reviews", deleteReview);
}

export default ReviewsController;