var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/imageperformance",
  { useNewUrlParser: true }
);

var imageSeed = [
  {
    description: "Swirly Brown",
    image: "/assets/images/1.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Royal Heart",
    image: "/assets/images/2.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Abstract Profile",
    image: "/assets/images/4.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Unhidden Tears",
    image: "/assets/images/5.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Air Heads",
    image: "/assets/images/6.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Splash Lady",
    image: "/assets/images/8.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Too Easy",
    image: "/assets/images/10.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ways Opposed",
    image: "/assets/images/11.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Finding Answers",
    image: "/assets/images/12.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Vase Bod",
    image: "/assets/images/13.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Heart Hole",
    image: "/assets/images/14.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Dawn",
    image: "/assets/images/15.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Mezmorize?",
    image: "/assets/images/16.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Collage 1",
    image: "/assets/images/17.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Collage 2",
    image: "/assets/images/18.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    
    description: "Collage 3",
    image: "/assets/images/19.jpg",
    rating: 0,
    date: new Date(Date.now())
  }
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
