import * as moderationsDao from "./moderations-dao.js";

const moderationsController = (app) => {

  const findModerationsByPark = async (req, res) => {
    const park = req.params.park;
    const allModerations = await moderationsDao.findModerationsByPark(park);
    res.send(allModerations);
  }

  const findModerationsByUser = async (req, res) => {
    const user = req.params.user;
    const allModerations = await moderationsDao.findModerationsByUser(user);
    res.send(allModerations);
  }

  const createModeration = async (req, res) => {
    const moderation = req.body;
    const status = await moderationsDao.createModeration(moderation);
    res.send(status);
  }

  const unMod = async (req, res) => {
    const username = req.params.username;
    const status = await moderationsDao.unMod(username);
    res.send(status);
  }

  app.get("/moderations/parks/:park", findModerationsByPark);
  app.get("/moderations/users/:user", findModerationsByUser);
  app.post("/moderations", createModeration);
  app.delete("/moderations/:username", unMod);
}

export default moderationsController;