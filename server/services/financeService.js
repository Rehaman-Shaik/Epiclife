import { MongoDBClient } from '../models/mongo.js'

async function addFinanceEntry(req) {
    const time = req.body.time
    const type = req.body.type
    const amount = req.body.amount
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const insertedDocument = await mongoClient.insertDocument("Finance", { "userId": req.params.userId, "time": time, "text": type, "amount": amount });
    if (insertedDocument.acknowledged == true){
        return true
    } else {
        return false
    }
}

async function listAllFinanceEntries(req) {
    const userId = req.params.userId
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const financeEntries = await mongoClient.findAllDocuments("Finance", { "userId": userId });
    return financeEntries
}
export {addFinanceEntry, listAllFinanceEntries}