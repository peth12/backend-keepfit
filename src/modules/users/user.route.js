import express from 'express';
import UserController from './controller/user.controller.js';



const UserRouter = express.Router();



UserRouter.get("/", UserController.getUser);
UserRouter.get("/:id", UserController.getUserById); 
UserRouter.post("/", UserController.getUserByEmail); 
UserRouter.post("/create", UserController.createUser); 
UserRouter.put("/update/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);



export default UserRouter