import { checkUserReturnResponse, insertUserReturnResponse } from '../services/users.js'

function mainUsers(req, res) {
    res.json({ "msg": "mainUsers" })
}

async function userLogin(req, res) {
    var response = await checkUserReturnResponse(req)
    res.json(response);
}


async function userSignup(req, res) {
    var response = await insertUserReturnResponse(req)
    res.send(response);
}

export { mainUsers, userLogin, userSignup }