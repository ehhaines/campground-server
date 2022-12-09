import * as parksDao from "./parks-dao.js";

// export let parks = [
//   {
//     "fullName": "Acadia National Park",
//     "shortName": "Acadia",
//     "parkCode": "acad",
//     "description": "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 4 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
//     "weather": "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
//     "city": "Bar Harbor",
//     "state": "ME",
//     "statesSpanned": "ME",
//     "image": "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg"
//   },
//   {
//     "fullName": "Katahdin Woods and Waters National Monument",
//     "shortName": "Katahdin",
//     "parkCode": "kaww",
//     "description": "Spread across a wild landscape offering spectacular views of Mount Katahdin, Katahdin Woods and Waters invites discovery of its rivers, streams, woods, flora, fauna, geology, and the night skies that have attracted humans for millennia.",
//     "weather": "Northern Maine experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).",
//     "city": "Patten",
//     "state": "ME",
//     "statesSpanned": "ME,NH",
//     "image": "https://www.nps.gov/common/uploads/structured_data/706CD3A6-9835-C974-F5C1ECDF3354177B.jpg"
//   }
// ]

const ParksController = (app) => {

  const findParkByCode = async (req, res) => {
    const currentParkCode = req.params['park'];
    const currentPark = await parksDao.findParkByCode(currentParkCode);
    res.send(currentPark);
  }

  app.get("/parks/:park", findParkByCode);
}

export default ParksController;