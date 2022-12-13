import tripsModel from "./trips-model.js";

export const createTrip = (trip) =>
  tripsModel.create(trip);

export const completeTrip = (tripID) =>
  tripsModel.updateOne({_id: tripID}, {$set: {isCompleted: true}});

export const deleteTrip = (tripID) =>
  tripsModel.deleteOne({_id: tripID});

export const findAllTrips = () => 
  tripsModel.find();