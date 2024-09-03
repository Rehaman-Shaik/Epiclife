import { requestLog } from "../services/common/logsRequests.js";

function mainController(req, res){
    requestLog(req)
    res.redirect('/portfolio')
    // res.send('<h1>Hello world from Rehaman</h1>')
}

export {mainController}