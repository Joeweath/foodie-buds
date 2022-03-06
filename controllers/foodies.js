import { Foodie } from "../models/foodie.js";

function index(req, res) {
  res.render("foodies/index", {
    foodies: foodies,
    name: req.query.name,
    user: req.user,
  });
}
