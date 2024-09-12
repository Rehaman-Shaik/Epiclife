import { requestLog } from "../services/common/logsRequests.js";
import { sendPortfolioHtml } from "../controllers/portfolioController.js";

function mainController(req, res) {
    requestLog(req)
    portfolioRouter.get("/portfolio", sendPortfolioHtml)
}

export { mainController }