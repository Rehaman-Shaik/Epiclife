import express from "express";
import { sendPortfolioHtml, sendNewPortfolioHtml, projects, projectDetails} from "../controllers/portfolioController.js";

const portfolioRouter = express.Router();

portfolioRouter.get("/portfolio", sendPortfolioHtml)
portfolioRouter.get("/new-portfolio", sendNewPortfolioHtml)
portfolioRouter.get("/portfolio/projects", projects)
portfolioRouter.get("/portfolio/project/:metaUrl", projectDetails)

export default portfolioRouter