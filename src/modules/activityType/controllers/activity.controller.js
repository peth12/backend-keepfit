import ActivityTypeService from "../services/activityType.service.js";
import cloudinary from "../../../utils/cloundinary.js";

const ActivityTypeController = {
  getUser: async (req, res) => {
    const ActivityType = await ActivityTypeService.getAll();
    res.status(200).json(ActivityType);
  },
  getUserById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const ActivityType = await ActivityTypeService.getOne(id);
      if (!ActivityType) {
        return res.send({ message: "User not Found" });
      }
      res.status(200).json(ActivityType);
    } catch (err) {
      console.error(err);
      next();
    }
  },
  createActivityType: async (req, res, next) => {
    try {
      const { ActivityTypeName, ActivityTypeImage, ActivityTypeDesc } =
        req.body;
        const uploadResponse = await cloudinary.uploader.upload(ActivityTypeImage, {
          upload_preset: 'keepfit',
          folder: 'workout'
         })
         console.log(uploadResponse.url);
      if (ActivityTypeName) {
        const ActivityType = await ActivityTypeService.create({
          ActivityTypeName,
          ActivityTypeImage : uploadResponse.url,
          ActivityTypeDesc,
        });
        return res.status(201).json(ActivityType);
      } else {
        return res.send({ message: "This Workout already exists" });
      }
    } catch (err) {
      next(err); 
    }
  },
  updateActivityType: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { ActivityTypeName, ActivityTypeImage, ActivityTypeDesc } =
        req.body;

      const updateDataActivityType = {
        ActivityTypeName: ActivityTypeName,
        ActivityTypeImage: ActivityTypeImage,
        ActivityTypeDesc: ActivityTypeDesc,
      };

      const ActivityType = await ActivityTypeService.updateOne(
        id,
        updateDataActivityType
      );

      res.status(201).json(ActivityType);
    } catch (err) {
      next(err);
    }
  },
  deletActivityType: async (req, res, next) => {
    try {
      const id = req.params.id;
      await ActivityTypeService.deleteOne(id);
      res.status(201).send("delete success");
    } catch (err) {
      next(err);
    }
  },
};

export default ActivityTypeController;
