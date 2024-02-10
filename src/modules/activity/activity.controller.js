import ActivityService from "./activity.service.js";
import cloudinary from "../../utils/cloundinary.js";

const ActivityController = {
  getAllActivity : async (req, res) => {
    const activityData = await ActivityService.getAll();
    const changeDateFormat = new Date(activityData.ActivityDate)

    res.status(201).json(activityData);
  },
  getOneActivity: async (req, res) => {
    try {
      const id = req.params.id;
      const activityData = await ActivityService.getOne(id);
      res.status(201).json(activityData);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  createActivity: async (req, res) => {
    const ActivityDurationInt = parseInt(req.body.ActivityDuration) 
    try {
      const {
        ActivityName,
        ActivityDesc,
        ActivityType,
        ActivityImage,
        ActivityDate,
        UserId,
        UserEmail
      } = req.body;
      if(ActivityImage){
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
           ActivityDate,
           UserId,
           UserEmail
         });
         res.status(201).json(activityData);
         return
      }
      else {
        const activityData = await ActivityService.create({
          ActivityName,
          ActivityDesc,
          ActivityType,
          ActivityDuration : ActivityDurationInt,
          ActivityImage : "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg",
          ActivityDate,
          UserId, 
          UserEmail
        });
        
        res.status(201).json(activityData);
        return 
      }

    } catch (err) {
      res.status(500).json(err)
    }
  },
  updateActivity: async (req, res) => {
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
      res.status(500).json(err)
    }
  },
  deleteActivity: async (req, res) => {
    try {
      const id = req.params.id;
      await ActivityService.deleteOne(id);
      res.status(201).send("delete success");
    } catch (err) {
      res.status(500).json(err)
    }
  },
  getActivityByEmail: async (req, res) => {
    try{
      const { UserEmail } = req.body

      const activityData = await ActivityService.getEmail({ UserEmail : UserEmail}).sort ( { ActivityDate: -1 } )

      res.json(activityData)
    }catch(err){
      res.status(500).json(err)
    } 
  }
};

export default ActivityController;
