import usersModel from "./users-model.js";

export const createUser = (user) =>
    usersModel.create(user)

export const findByUsername = (username) =>
    usersModel.findOne({username})

export const findByCredentials = (username, password) =>
    usersModel.findOne(
        {username, password},
        {password: false})
export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})

export const findAnonUser = (username) =>
        usersModel.find({username: username});

export const ban = (username) =>
        usersModel.updateOne({username: username}, {$set: {isBanned: true}});

export const unban = (username) =>
        usersModel.updateOne({username: username}, {$set: {isBanned: false}});