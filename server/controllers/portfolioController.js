import { returnProjects, returnProject } from '../services/portfolioServices.js';
import { requestLog } from "../services/common/logsRequests.js";

function sendPortfolioHtml(req, res) {
    requestLog(req)
    res.render('portfolio/portfolio.ejs');
}
async function projects(req, res) {
    requestLog(req)
    const projectList = await returnProjects(req)
    res.render("portfolio/projects.ejs", { "projects": projectList });
}
async function projectDetails(req, res) {
    requestLog(req)
    const metaUrl = req.params.metaUrl
    const project = await returnProject(metaUrl)
    res.render("portfolio/projectDetails.ejs", { "project": project });
}
function renderDrumKit(req, res) {
    requestLog(req)
    res.render("projects/drumKit.ejs")
}

function renderSimonGame(req, res) {
    requestLog(req)
    res.render("projects/simonGame/index.ejs")
}
export { sendPortfolioHtml, projects, projectDetails, returnProject, renderDrumKit, renderSimonGame }