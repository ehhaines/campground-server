import * as tripsDao from "./trips-dao.js";

const TripsController = (app) => {
  
  const createTrip = async (req, res) => {
    const newTrip = req.body;
    const actualTrip = await tripsDao.createTrip(newTrip);
    res.send(actualTrip);
  }

  const completeTrip = async (req, res) => {
    const tripID = req.params.tripID;
    try {
      await tripsDao.completeTrip(tripID);
      res.send(200);
    } catch {
      res.send(501);
    }
  }

  const deleteTrip = async (req, res) => {
    const tripID = req.params.tripID;
    await tripsDao.deleteTrip(tripID);
    return tripID;
  }

  const findAllTrips = async (req, res) => {
    const allTrips = tripsDao.findAllTrips();
    res.json(allTrips);
  }

  app.get('/trips', findAllTrips);
  app.post('/trips', createTrip);
  app.put('/trips/:tripID', completeTrip);
  app.delete('/trips/:tripID', deleteTrip);
}

export default TripsController;