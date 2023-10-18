import express from 'express';
import UserRouter from '../modules/users/user.route.js';
import AuthRouter from '../modules/auth/auth.route.js';
import ActivityRouter from '../modules/activity/activity.route.js';
import ActivityTypeRouter from '../modules/activityType/activityType.route.js';

const AppRouter = express.Router();


AppRouter.use('/user', UserRouter);
AppRouter.use('/auth', AuthRouter);
AppRouter.use('/activity', ActivityRouter);
AppRouter.use('/activityType', ActivityTypeRouter);

 
export default AppRouter;