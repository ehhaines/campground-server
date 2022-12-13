import * as friendshipsDao from "./friendships-dao.js";

const FriendshipsController = (app) => {

  const findFriendshipsByUser = async (req, res) => {
    const user = req.params['user'];
    const matchingFriendships = await friendshipsDao.findFriendshipsByUser(user);
    res.json(matchingFriendships);
  }

  const createFriendship = async (req, res) => {
    const newFriendship = req.body;
    const actualFriendShip = await friendshipsDao.createFriendship(newFriendship);
    res.send(actualFriendShip);
  }

  const deleteFriendship = async (req, res) => {
    const friendshipID = req.params.friendshipID;
    await friendshipsDao.deleteFriendship(friendshipID);
    res.send(200);
  }

  app.get("/friendships/:user", findFriendshipsByUser);
  app.post("/friendships", createFriendship);
  app.delete("/friendships/:friendshipID", deleteFriendship);
}

export default FriendshipsController;