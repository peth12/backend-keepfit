import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Userfname: {
    type: String,
    require: true,
  },
  Userlname: {
    type: String,
    require: true,
  },
  UserDateOfBirth: {
    type: Date,
  },
  UserImage: {
    type: String,
  },
  Gender: {
    type: String,
    default: "Not specified",
  },
  Wieght: {
    type: Number,
    default: 0,
  },
  Height: {
    type: Number,
    default: 0,
  },
  UserEmail: {
    type: String,
    require: true,
  },
  UserPassword: {
    type: String,
    require: true,
  },
  UserRole: {
    type: String,
    default: 'user'
  }
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
