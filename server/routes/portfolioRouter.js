import express from "express";
import {sendPortfolioHtml, projects, projectDetails} from "../controllers/portfolioController.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/portfolio", sendPortfolioHtml)
portfolioRouter.get("/portfolio/projects", projects)
portfolioRouter.get("/portfolio/project/:metaUrl", projectDetails)

export default portfolioRouter