import express from "express";
import { mainFinance, addFinanceController, returnAllFinanceController } from "../controllers/financeController.js";
const financeRouter = express.Router();


financeRouter.get("/finance", mainFinance)
financeRouter.post("/finance/:userId/add", addFinanceController)
financeRouter.get("/finance/:userId/all", returnAllFinanceController)

export default financeRouter