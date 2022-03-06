import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodies = new Schema({
  name: String,
  recipe: String,
  chowTime: {type: String, [breakfast, lunch, dinner]},
  ingrident: { type: Schema.Types.ObjectId, ref: 'Ingrident'},
});

const Foodie = mongoose.model('Foodie', foodiesSchema)

export {
  Foodie
}
