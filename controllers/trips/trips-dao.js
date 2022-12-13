import tripsModel from "./trips-model";

export const createTrip = (trip) =>
  tripsModel.create(trip);

export const completeTrip = (tripID) =>
  tripsModel.updateOne({_id: tripID}, {$set: {isCompleted: true}});

export const deleteTrip = (tripID) =>
  tripsModel.deleteOne({_id: tripID});

// TODO: Implement find trips by user