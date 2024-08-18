import express from "express";
import { mainUsers, userLogin, userSignup } from "../controllers/usersController.js";
const usersRouter = express.Router();


usersRouter.get("/users", mainUsers)

usersRouter.post("/login", userLogin)
usersRouter.post("/signup", userSignup)


export default usersRouter