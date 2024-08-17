import { MongoDBClient } from '../models/mongo.js'

async function checkUserReturnResponse(req){
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const result = req.body;
    const email = result['email']
    const password = result['password']
    const document = await mongoClient.findDocument("Users", { email: email });
    await mongoClient.close();
    if (document == null) {
        var response = { "shouldLogin": false }
    } else if (password == document.password) {
        var response = { "shouldLogin": true }
    } else {
        var response = { "shouldLogin": false }
    }
    return response
}

export {checkUserReturnResponse}