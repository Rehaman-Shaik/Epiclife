import express from "express";
import { mainUsers, userLogin } from "../controllers/usersController.js";
const usersRouter = express.Router();


usersRouter.get("/users", mainUsers)

usersRouter.post("/login", userLogin)


export default usersRouter