import { Foodie } from "../models/foodie.js";

function index(req, res) {
  Foodie.find({})
    .then((foodies) => {
      res.render("foodies/index", {
        foodies,
        title: "Food😋",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/foodies");
    });
}

function newFood(req, res) {
  req.body.owner = req.user.profile._id;
  Foodie.create(req.body)
    .then((foodie) => {
      res.render("foodies/new", {
        title: "Add Meal",
      });
    })
    .catch((err) => {
      res.redirect("/foodies");
    });
}

function create(req, res) {
  console.log("Hello im joe");
  req.body.owner = req.user.profile._id;
  Foodie.create(req.body)
    .then((foodie) => {
      res.redirect("/foodies");
    })
    .catch((err) => {
      res.redirect("/foodies/new");
    });
}

function show(req, res) {
  Foodie.findById(req.params.id)
    .populate("profile")
    .then((foodie) => {
      res.render("foodies/show", {
        foodie,
        title: "Food 😋",
      });
    });
}

export { index, newFood as new, create, show };
