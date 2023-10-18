import express from 'express';
import ActivityController from './controller/activity.controller.js';


const ActivityRouter = express.Router();

ActivityRouter.get('/', ActivityController.getAllActivity);
ActivityRouter.get('/:id', ActivityController.getOneActivity);
ActivityRouter.post('/create', ActivityController.createActivity);
ActivityRouter.put('/update/:id', ActivityController.updateActivity);
ActivityRouter.delete('/:id', ActivityController.deleteActivity);


export default ActivityRouter;