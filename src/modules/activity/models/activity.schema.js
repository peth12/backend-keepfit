import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  ActivityName: {
    type: String,
    require: true,
  },
  ActivityDesc: {
    type: String,
    require: true,
  },
  ActivityType: {
    type: String,
  },
  ActivityDuration: {
    type: Number,
    default: 0,
  },
  ActivityImage: {
    type: String,
    default: "image",
  },
  ActivityDate: {
    type: Date,
    default: new Date(),
  },
  UserEmail: {
    type: String,
    require: true,
  },
  UserNameId: {
    type: Number,
    require: true,
  },
});

const ActivityModel = mongoose.model("Activity", ActivitySchema);

export default ActivityModel;
