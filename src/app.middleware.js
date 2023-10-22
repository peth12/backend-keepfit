import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet'

const AppMiddleware = express();



AppMiddleware.use(express.json({limit: '50mb'}))
AppMiddleware.use(express.urlencoded({extended:true}))
AppMiddleware.use(morgan('dev'))
AppMiddleware.use(cors())
AppMiddleware.use(helmet())

export default AppMiddleware