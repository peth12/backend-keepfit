import express from 'express';
import ActivityTypeController from './activity.controller.js';


const ActivityTypeRouter = express.Router();


ActivityTypeRouter.get('/', ActivityTypeController.getUser);
ActivityTypeRouter.get('/:id', ActivityTypeController.getUserById);
ActivityTypeRouter.post('/create', ActivityTypeController.createActivityType);
ActivityTypeRouter.put('/update/:id', ActivityTypeController.updateActivityType);
ActivityTypeRouter.delete('/:id', ActivityTypeController.deletActivityType);

export default ActivityTypeRouter;