import express from "express";
import { sendPortfolioHtml } from "../controllers/portfolioController.js";
const portfolioRouter = express.Router();


portfolioRouter.get("/portfolio", sendPortfolioHtml)



export default portfolioRouter