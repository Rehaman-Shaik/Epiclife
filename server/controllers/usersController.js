function mainUsers(req, res){
    res.json({ "msg": "mainUsers" })
}

function userLogin(req, res) {
    console.log("Body: ", req.body); // Only log req.body
    const msg = req.body;
    res.json({ "msg": msg });
}


export {mainUsers, userLogin}