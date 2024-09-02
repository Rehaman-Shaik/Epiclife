import { returnProjects, returnProject } from '../services/portfolioServices.js';

function sendPortfolioHtml(req, res) {
    res.render('portfolio/portfolio.ejs');
}
async function projects(req, res) {
    const projectList = await returnProjects(req)
    res.render("portfolio/projects.ejs", { "projects": projectList });
}
async function projectDetails(req, res) {
    const metaUrl = req.params.metaUrl
    const project = await returnProject(metaUrl)
    res.render("portfolio/projectDetails.ejs", { "project": project });
}
function renderDrumKit(req, res) {
    res.render("projects/drumKit.ejs")
}

export { sendPortfolioHtml, projects, projectDetails, returnProject, renderDrumKit }