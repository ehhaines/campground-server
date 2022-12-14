import followsModel from "./follows-model.js";

export const findByFollower = async (username) => {
  const allFollowing = await followsModel.find({follower: username});
  return allFollowing;
}

export const findByFollowing = async (username) => {
  const allFollowers = await followsModel.find({following: username});
  return allFollowers;
}

export const createFollow = async (follow) => {
  const createdFollow = await followsModel.create(follow);
  return createdFollow;
}

export const unfollow = async (followID) => {
  await followsModel.deleteOne({_id: followID});
}

