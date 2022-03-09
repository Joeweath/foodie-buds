import mongoose from "mongoose";

const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    comment: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  {
    timestamps: true,
  }
);

const foodieSchema = new Schema({
  direction: String,
  meal: String,
  description: String,
  chowTime: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner"],
  },
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  feedback: [feedbackSchema],
});

const Foodie = mongoose.model("Foodie", foodieSchema);

export { Foodie };
