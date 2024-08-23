import { MongoDBClient } from '../models/mongo.js'

async function addTodo(req) {
    const text = req.body.text
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const insertedDocument = await mongoClient.insertDocument("To-do", { "userId": req.params.userId, "text": text, "struck": false });
    if (insertedDocument.acknowledged == true){
        return true
    } else {
        return false
    }
}

async function listTodo(req) {
    const userId = req.params.userId
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const todoItems = await mongoClient.findAllDocuments("To-do", { "userId": userId });
    return todoItems
}
export { addTodo, listTodo }