import { checkUserReturnResponse, insertUserReturnResponse } from '../services/users.js'
import { requestLog } from "../services/common/logsRequests.js";

function mainUsers(req, res) {
    requestLog(req)
    res.json({ "msg": "mainUsers" })
}

async function userLogin(req, res) {
    requestLog(req)
    var response = await checkUserReturnResponse(req)
    res.json(response);
}


async function userSignup(req, res) {
    requestLog(req)
    var response = await insertUserReturnResponse(req)
    res.send(response);
}

export { mainUsers, userLogin, userSignup }