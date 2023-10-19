import ActivityModel from "../models/activity.schema.js";
import ActivityService from "../services/activity.service.js";

const ActivityController = {
  getAllActivity: async (req, res) => {
    const activityData = await ActivityService.getAll();
    res.status(201).json(activityData);
  },
  getOneActivity: async (req, res, next) => {
    try {
      const id = req.params.id;
      const activityData = await ActivityService.getOne(id);
      res.status(201).json(activityData);
    } catch (err) {
      next(err);
    }
  },
  createActivity: async (req, res, next) => {
    try {
      const {
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityDuration,
        ActivityImage,
        UserId,
        UserEmail
      } = req.body;

      const activityData = await ActivityModel.create({
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityDuration,
        ActivityImage,
        UserId,
        UserEmail
      });

      res.status(201).json(activityData);
    } catch (err) {
      next(err);
    }
  },
  updateActivity: async (req, res, next) => {
    try {
      const id = req.params.id;
      const {
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityDuration,
        ActivityImage,
        UserId,
        UserEmail
      } = req.body;

      const updateDataActivity = {
        ActivityName: ActivityName,
        ActivityDesc: ActivityDesc,
        ActivityType: ActivityType,
        ActivityDuration: ActivityDuration,
        ActivityImage: ActivityImage,
        UserId: UserId,
        UserEmail : UserEmail
      };

      const activityData = await ActivityService.updateOne(
        id,
        updateDataActivity
      );
      res.status(201).json(activityData);
    } catch (err) {
      next(err);
    }
  },
  deleteActivity: async (req, res, next) => {
    try {
      const id = req.params.id;
      await ActivityService.deleteOne(id);
      res.status(201).send("delete success");
    } catch (err) {
      next(err);
    }
  },
};

export default ActivityController;
