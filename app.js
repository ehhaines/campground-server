import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import ParksController from "./controllers/parks/parks-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import GreetingController from "./greeting.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";

// mongoose.connect('mongodb://localhost:27017/final').then(r => console.log("connect MongoDB"))
mongoose.connect('mongodb://localhost:27017/campground');

const app = express();
app.use(cors());
app.use(express.json());

GreetingController(app);
ParksController(app);
ReviewsController(app);
UsersController(app);

app.listen(process.env.PORT || 4000);