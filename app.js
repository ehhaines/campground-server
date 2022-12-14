import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import ParksController from "./controllers/parks/parks-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import GreetingController from "./greeting.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import SessionController from "./session-controller.js";
import session from "express-session";
import TripsController from "./controllers/trips/trips-controller.js";
import moderationsController from "./controllers/moderations/moderations_controller.js";
import AlertsController from "./controllers/alerts/alerts-controller.js";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4
}

// mongoose.connect('mongodb://localhost:27017/final').then(r => console.log("connect MongoDB"))
mongoose.connect('mongodb://localhost:27017/campground', options);

const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(session({
  secret: 'should be an environment variable',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(express.json());

GreetingController(app);
ParksController(app);
ReviewsController(app);
UsersController(app);
TripsController(app);
moderationsController(app);
AlertsController(app);
FollowsController(app);
SessionController(app);

app.listen(process.env.PORT || 4000);