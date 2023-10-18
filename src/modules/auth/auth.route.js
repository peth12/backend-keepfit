import express from "express";
import AuthController from "./controllers/auth.controller.js";


const AuthRouter = express.Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/register", AuthController.register); 


export default AuthRouter;
