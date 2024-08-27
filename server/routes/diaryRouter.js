import express from "express";
import { addDiaryController, returnAllDiaryController } from "../controllers/diaryController.js";
const diaryRouter = express.Router();


diaryRouter.post("/diary/:userId/add", addDiaryController)
diaryRouter.get("/diary/:userId/all", returnAllDiaryController)


export default diaryRouter