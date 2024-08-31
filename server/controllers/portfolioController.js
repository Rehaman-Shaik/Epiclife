import path from 'path';
import { returnProjects, returnProject } from '../services/portfolioServices.js';

function sendPortfolioHtml(req, res) {
    res.sendFile(path.join(process.cwd(), 'public', 'templates/portfolio.html'));
}
function sendNewPortfolioHtml(req, res) {
    res.render('portfolio/newPortfolio.ejs');
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

export { sendPortfolioHtml, sendNewPortfolioHtml, projects, projectDetails, returnProject }