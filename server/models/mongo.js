import { MongoClient } from 'mongodb';

class MongoDBClient {
    constructor() {
        this.uri = "mongodb+srv://shaikrehamanrp:8olXTzYp0Jyym26O@rehaman.ud7vepx.mongodb.net/?retryWrites=true&w=majority&appName=Rehaman";
        this.dbName = "EpicLife";
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Connected to MongoDB");
            this.database = this.client.db(this.dbName);
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
        }
    }

    getCollection(collectionName) {
        return this.database.collection(collectionName);
    }

    async insertDocument(collectionName, document) {
        const collection = this.getCollection(collectionName);
        try {
            const result = await collection.insertOne(document);
            console.log(`Document inserted with _id: ${result.insertedId}`);
        } catch (error) {
            console.error("Failed to insert document", error);
        }
    }

    async findDocument(collectionName, query) {
        const collection = this.getCollection(collectionName);
        try {
            const document = await collection.findOne(query);
            return document;
        } catch (error) {
            console.error("Failed to find document", error);
        }
    }

    async close() {
        try {
            await this.client.close();
            console.log("Connection to MongoDB closed");
        } catch (error) {
            console.error("Failed to close MongoDB connection", error);
        }
    }
}


// Usage

export { MongoDBClient}