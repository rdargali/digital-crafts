const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.use(express.urlencoded());

//tell express you're using mustache templating engine
app.engine("mustache", mustacheExpress());

//tell express your pages are located in a directory names "views"
app.set("views", "./views");

//tell express mustache is being used
app.set("view engine", "mustache");

let trips = [
  {
    city: "Austin",
    departure: "12/20/2019",
    return: "12/25/2019",
    image:
      "https://www.sparefoot.com/moving/wp-content/uploads/2017/03/austin-texas-200x200.jpg"
  },

  {
    city: "Dallas",
    departure: "11/05/2019",
    return: "11/10/2019",
    image:
      "https://www.bristolglobal.com/site/assets/files/2083/dallas.200x200.jpg"
  },

  {
    city: "Las Vegas",
    departure: "02/09/2020",
    return: "02/15/2020",
    image:
      "https://cdn4.picryl.com/thumbnail/2019/09/17/lake-in-front-of-the-bellagio-hotel-and-resort-las-vegas-nevada-632353-200.jpg"
  },

  {
    city: "San Francisco",
    departure: "03/06/2020",
    return: "03/11/2020",
    image:
      "https://lam-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/SF-200x200.jpg"
  }
];

app.get("/", (req, res) => {
  res.render("index", { trips });
});

app.post("/", (req, res) => {
  let myTrips = {
    city: req.body.myCity,
    departure: req.body.myDeparture,
    return: req.body.myReturn,
    image: req.body.myImage
  };
  trips.push(myTrips);

  console.log(`Success! ${req.body.myCity} added to trips`);

  res.redirect("/");
});

app.post("/remove", (req, res) => {
  let removeCity = req.body.removeCity;
  let newTrips = trips.filter(trip => trip.city != removeCity);

  trips = newTrips;

  res.redirect("/");
});

//listening on port 3000
app.listen(3000, () => {
  console.log("running on 3000");
});
