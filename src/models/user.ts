import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
