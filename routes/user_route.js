import express from "express";
import { addUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/user_controller.js";
const userRoute=express.Router();

userRoute.get("/get",getUsers)

userRoute.post("/add",addUser)

userRoute.delete("/delete/:id",deleteUser)

userRoute.patch("/updateName/:id",updateUser)

userRoute.get("/getUser/:id",getSingleUser);

export default userRoute;