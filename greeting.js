const GreetingController = (app) => {
  app.get('/', (req, res) => {
    res.send("The server is up and running!");
  });
}

export default GreetingController;