import { MongoDBClient } from '../models/mongo.js'

async function addWatchList(req) {
    const name = req.body.name
    const isPlayed = req.body.isPlayed
    const mediaType = req.body.mediaType
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const insertedDocument = await mongoClient.insertDocument("WatchList", { "userId": req.params.userId, "name": name, "isPlayed":isPlayed, "mediaType":mediaType });
    if (insertedDocument.acknowledged == true){
        return true
    } else {
        return false
    }
}

async function listAllWatchList(req) {
    const userId = req.params.userId
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const allMediaItems = await mongoClient.findAllDocuments("WatchList", { "userId": userId });
    return allMediaItems
}
export { addWatchList, listAllWatchList }