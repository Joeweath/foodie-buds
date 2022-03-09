import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    myfood: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foodie" }],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };
