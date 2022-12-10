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

  app.get("/reviews/:park", findReviewsByPark);
  app.post("/reviews", createReview);
}

export default ReviewsController;