import { MongoDBClient } from '../models/mongo.js'

async function checkUserReturnResponse(req) {
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
        var response = { "shouldLogin": true , "token":document._id}
    } else {
        var response = { "shouldLogin": false }
    }
    return response
}

async function insertUserReturnResponse(req) {
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const result = req.body;
    const email = result['email']
    const password = result['password']
    const retrivedDocument = await mongoClient.findDocument("Users", { email: email });
    if (retrivedDocument) {
        var response = { "shouldSignup": 'alreadypresent' }
    } else {
        const insertedDocument = await mongoClient.insertDocument("Users", { 'email': email, 'password': password });
        if (insertedDocument['acknowledged'] == true) {
            var response = { "shouldSignup": true }
        } else {
            console.log('else');
            var response = { "shouldSignup": false }
        }
    }
    return response
}


export { checkUserReturnResponse, insertUserReturnResponse }