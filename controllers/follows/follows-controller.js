import * as followsDao from "./follows-dao.js";

const FollowsController = (app) => {

  const findByFollower = async (req, res) => {
    const user = req.params['follower'];
    const allFollows = await followsDao.findByFollower(user);
    res.send(allFollows);
  }

  const findByFollowing = async (req, res) => {
    const user = req.params['following'];
    const allFollowers = await followsDao.findByFollowing(user);
    res.send(allFollowers);
  }

  const createFollow = async (req, res) => {
    const newFollow = req.body;
    const status = await followsDao.createFollow(newFollow);
    res.send(status);
  }

  const unfollow = async (req, res) => {
    const followID = req.params.followID;
    const status = await followsDao.unfollow(followID);
    res.send(status);
  }

  app.get("/follows/byfollower/:follower", findByFollower);
  app.get("/follows/byfollowing/:following", findByFollowing);
  app.post("/follows", createFollow);
  app.delete("/follows/:followID", unfollow);
}

export default FollowsController;