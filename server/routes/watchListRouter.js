import express from "express";
import { addWatchListController, returnAllWatchListController } from "../controllers/watchListController.js";
const watchListRouter = express.Router();


watchListRouter.post("/watch-list/:userId/add", addWatchListController)
watchListRouter.get("/watch-list/:userId/all", returnAllWatchListController)


export default watchListRouter