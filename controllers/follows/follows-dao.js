import followsModel from "./follows-model.js";

export const createFollow = async (follow) => {
  const createdFollow = await followsModel.create(follow);
  return createdFollow;
}

export const findFollowed = (followed) =>
  followsModel.find({followed})
    .populate('follower')
    .exec()

export const unfollow = async () => {

}

