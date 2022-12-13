import friendshipsModel from "./friendships-model.js";

export const findFriendshipsByUser = async (username) => {
  const allFriends = await friendshipsModel.find({
    $or: [
      {user1: username},
      {user2: username}
    ]
  });
  return allFriends;
}

export const createFriendship = async (friendship) => {
  const createdFriendship = await friendshipsModel.create(friendship);
  return createdFriendship;
}

export const deleteFriendship = async (friendshipID) => {
  await friendshipsModel.deleteOne({_id: friendshipID});
}

