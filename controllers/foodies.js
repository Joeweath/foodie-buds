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

function create(req, res) {
  req.body.owner = req.user.profile._id;
  Foodie.create(req.body)
    .then((foodie) => {
      res.redirect("/foodies");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/foodies");
    });
}

export { index, create };
