import { requestLog } from "../services/common/logsRequests.js";
import { addFinanceEntry, listAllFinanceEntries } from "../services/financeService.js";

function mainFinance(req, res) {
    requestLog(req)
    res.json({ "finance": "finance" })
}

async function addFinanceController(req, res) {
    requestLog(req)
    var is_saved = await addFinanceEntry(req)
    if (is_saved) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
}

async function returnAllFinanceController(req, res) {
    requestLog(req)
    const financeEntries = await listAllFinanceEntries(req)
    if (financeEntries) {
        res.send(financeEntries)
    }
}
export { mainFinance, addFinanceController, returnAllFinanceController }