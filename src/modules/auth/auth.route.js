import express from "express";
import AuthController from "./controllers/auth.controller.js";
import auth from "../../middlewares/auth.js";


const AuthRouter = express.Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/register", AuthController.register); 
AuthRouter.post("/current",auth, AuthController.currentUser); 


export default AuthRouter;
