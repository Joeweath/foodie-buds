import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodieSchema = new Schema({
  direction: String,
  meal: String,
  description: String,
  chowTime: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner"],
  },
  // ingredients: { type: Schema.Types.ObjectId, ref: "Ingredient" },
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
});

const Foodie = mongoose.model("Foodie", foodieSchema);

export { Foodie };
