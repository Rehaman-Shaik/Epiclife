import { MongoDBClient } from '../models/mongo.js'

async function returnProjects() {
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const projectList = await mongoClient.findAllDocuments("Portfolio-projects", {});
    return projectList;
}

async function returnProject(metaUrl) {
    const mongoClient = new MongoDBClient();
    await mongoClient.connect();
    const project = await mongoClient.findDocument("Portfolio-projects", {"metaUrl":metaUrl});
    return project;
}

export { returnProjects, returnProject}