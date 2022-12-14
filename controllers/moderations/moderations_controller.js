import * as moderationsDao from "./moderations-dao.js";

const moderationsController = (app) => {

  const findModerationsByPark = async (res, req) => {
    const park = req.params.park;
    const allModerations = await moderationsDao.findModerationsByPark(park);
    res.send(allModerations);
  }

  const findModerationsByUser = async (res, req) => {
    const user = req.params.user;
    const allModerations = await moderationsDao.findModerationsByUser(user);
    res.send(allModerations);
  }

  const createModeration = async (res, req) => {
    const moderation = req.body;
    const response = await moderationsDao.createModeration(moderation);
    res.json(response);
  }

  app.get("/moderations/parks/:park", findModerationsByPark);
  app.get("/moderations/users/:user", findModerationsByUser);
  app.post("/moderations", createModeration);
}

export default moderationsController;