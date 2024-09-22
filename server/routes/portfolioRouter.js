import express from "express";
import {sendPortfolioHtml, projects, projectDetails, renderDrumKit, renderSimonGame} from "../controllers/portfolioController.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/portfolio", sendPortfolioHtml)
portfolioRouter.get("/portfolio/projects", projects)
portfolioRouter.get("/portfolio/project-details/:metaUrl", projectDetails)
portfolioRouter.get("/project/drum-kit", renderDrumKit)
portfolioRouter.get("/project/simon-game", renderSimonGame)

export default portfolioRouter