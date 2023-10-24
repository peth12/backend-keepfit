import ActivityModel from "../models/activity.schema.js";
import ActivityService from "../services/activity.service.js";
import cloudinary from "../../../utils/cloundinary.js";

const ActivityController = {
  getAllActivity : async (req, res) => {
    const activityData = await ActivityService.getAll();
    const changeDateFormat = new Date(activityData.ActivityDate)

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
    const ActivityDurationInt = parseInt(req.body.ActivityDuration) 
    try {
      const {
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityImage,
        UserId,
        UserEmail
      } = req.body;
      const uploadResponse = await cloudinary.uploader.upload(ActivityImage, {
        upload_preset: 'keepfit',
        folder: 'activity'
       })
      const activityData = await ActivityService.create({
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityDuration : ActivityDurationInt,
        ActivityImage : uploadResponse.url,
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
      const ActivityDurationInt = req.body.ActivityDuration
      parseInt()
      const {
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityImage,
        UserId,
        UserEmail
      } = req.body;
      const uploadResponse = await cloudinary.uploader.upload(ActivityImage, {
        upload_preset: 'keepfit',
        folder: 'activity'
       })
       if(uploadResponse){

        const updateDataActivity = {
          ActivityName: ActivityName,
          ActivityDesc: ActivityDesc,
          ActivityType: ActivityType,
          ActivityDuration: ActivityDurationInt,
          ActivityImage: uploadResponse.url,
          UserId: UserId,
          UserEmail : UserEmail
        };
  
        const activityData = await ActivityService.updateOne(
          id,
          updateDataActivity
        );
        res.status(201).json(activityData);
        return
       }

       const updateDataActivity = {
        ActivityName: ActivityName,
        ActivityDesc: ActivityDesc,
        ActivityType: ActivityType,
        ActivityDuration: ActivityDurationInt,
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
