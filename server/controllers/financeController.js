import { requestLog } from "../services/common/logsRequests.js";

function mainFinance(req, res){
    requestLog(req)
    res.json({ "finance": "finance" })
}

export {mainFinance}