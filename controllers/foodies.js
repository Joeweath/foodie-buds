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
  res.render("foodies/new", {
    title: "Add meal",
  });
}

function create(req, res) {
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
    .populate("owner")
    .then((foodie) => {
      res.render("foodies/show", {
        foodie,
        title: "Food 😋",
      });
    });
}

function edit(req, res) {
  Foodie.findById(req.params.id)
    .then((foodie) => {
      res.render("foodies/edit", {
        foodie,
        title: "edit 🚧",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/foodies");
    });
}

function update(req, res) {
  Foodie.findById(req.params.id)
    .then((food) => {
      if (food.owner.equals(req.user.profile._id)) {
        food.updateOne(req.body, { new: true }).then(() => {
          res.redirect(`/foodies/${food._id}`);
        });
      } else {
        throw new Error("🚫 Not authorized 🚫");
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/foodies`);
    });
}

function deleteTaco(req, res) {
  Foodie.findById(req.params.id)
    .then((food) => {
      if (food.owner.equals(req.user.profile._id)) {
        food.delete().then(() => {
          res.redirect("/foodies");
        });
      } else {
        throw new Error("🚫 Not authorized 🚫");
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/foodies");
    });
}

function createReview(req, res) {
  Foodie.findById(req.params.id, function (err, foodie) {
    foodie.feedback.push(req.body);
    foodie.save(function (err) {
      res.redirect(`/foodies/${foodie._id}`);
    });
  });
}

export {
  index,
  newFood as new,
  create,
  show,
  edit,
  update,
  deleteTaco as delete,
  createReview,
};
