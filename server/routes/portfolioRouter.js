import express from "express";
import {sendPortfolioHtml, projects, projectDetails, renderDrumKit} from "../controllers/portfolioController.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/portfolio", sendPortfolioHtml)
portfolioRouter.get("/portfolio/projects", projects)
portfolioRouter.get("/portfolio/project-details/:metaUrl", projectDetails)
portfolioRouter.get("/project/drum-kit", renderDrumKit)

export default portfolioRouter