import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
  user: {type: String, required: true},
  parkCode: {type: String, required: true},
  rating: Number,
  dateReviewed: String,
  review: String
}, {collection: "reviews"});

export default reviewsSchema;