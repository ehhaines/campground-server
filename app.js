import express from "express";
import ParksController from "./controllers/parks/parks-controller";

const app = express();
app.use(express.json());

ParksController(app);

app.listen(process.env.PORT || 4000);