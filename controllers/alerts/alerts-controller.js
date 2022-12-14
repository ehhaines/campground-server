import * as alertsDao from "./alerts-dao.js";

const AlertsController = (app) => {

  const findAlertsByPark = async (req, res) => {
    const park = req.params.park;
    const allAlerts = await alertsDao.findAlertsByPark(park);
    res.send(allAlerts);
  }

  const findAlertsByRanger = async (req, res) => {
    const ranger = req.params.ranger;
    const allAlerts = await alertsDao.findAlertsByRanger(ranger);
    res.send(allAlerts);
  }

  const resolveAlert = async (req, res) => {
    const alert = req.params.alert;
    const status = await alertsDao.resolveAlert(alert);
    res.send(status);
  }

  const createAlert = async (req, res) => {
    const alert = req.body;
    const status = await alertsDao.createAlert(alert);
    res.send(status);
  }

  app.get("/alerts/parks/:park", findAlertsByPark);
  app.get("/alerts/rangers/:ranger", findAlertsByRanger);
  app.delete("/alerts/:alert", resolveAlert);
  app.post("/alerts", createAlert);
}

export default AlertsController;