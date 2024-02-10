import express from 'express';
import ActivityController from './activity.controller.js';


const ActivityRouter = express.Router();

ActivityRouter.get('/', ActivityController.getAllActivity);
ActivityRouter.get('/:id', ActivityController.getOneActivity);
ActivityRouter.post('/', ActivityController.getActivityByEmail);
ActivityRouter.post('/create', ActivityController.createActivity);
ActivityRouter.put('/update/:id', ActivityController.updateActivity);
ActivityRouter.delete('/:id', ActivityController.deleteActivity);


export default ActivityRouter;