import { checkUserReturnResponse } from '../services/users.js'

function mainUsers(req, res) {
    res.json({ "msg": "mainUsers" })
}

async function userLogin(req, res) {
    var response = await checkUserReturnResponse(req)
    res.json(response);
}


export { mainUsers, userLogin }