import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

class MongoDBClient {
    constructor() {
        this.uri = process.env.MONGO_URI;
        this.dbName = process.env.MONGODB_NAME;
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
            await this.close()
            return result
        } catch (error) {
            console.error("Failed to insert document", error);
        }
    }

    async findDocument(collectionName, query) {
        const collection = this.getCollection(collectionName);
        try {
            const document = await collection.findOne(query);
            await this.close()
            return document;
        } catch (error) {
            console.error("Failed to find document", error);
        }
    }

    async findAllDocuments(collectionName, query) {
        const collection = this.getCollection(collectionName);
        try {
            const documents = await collection.find(query).toArray();
            await this.close()
            return documents;
        } catch (error) {
            console.error("Failed to find documents", error);
            throw error;
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


export { MongoDBClient }