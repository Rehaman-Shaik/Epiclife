import { MongoDBClient } from '../models/mongo.js'

async function addDiaryEntry(req) {
    const time = req.body.time
    const text = req.body.text
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const insertedDocument = await mongoClient.insertDocument("Diary", { "userId": req.params.userId, "time": time, "text": text });
    if (insertedDocument.acknowledged == true){
        return true
    } else {
        return false
    }
}

async function listAllDiaryEntries(req) {
    const userId = req.params.userId
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const diaryEntries = await mongoClient.findAllDocuments("Diary", { "userId": userId });
    return diaryEntries
}
export { addDiaryEntry, listAllDiaryEntries }