import path from 'path';
function sendPortfolioHtml(req, res){
    res.sendFile(path.join(process.cwd(), 'public', 'templates/portfolio.html'));
}

export {sendPortfolioHtml}