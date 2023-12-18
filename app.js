import express from 'express'
import AppMiddleware  from './src/app.middleware.js';
import { connectMongoDB } from './src/database/mongose.js';
import AppRouter from './src/routers/app.route.js';


const app = express();
const port = 3008
connectMongoDB()

app.use(AppMiddleware);
app.use(AppRouter);

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})