import express from "express";
import { todoController, addTodoController, returnAllController} from "../controllers/todoController.js";
const todoRouter = express.Router();


todoRouter.get("/todo", todoController)

todoRouter.post("/todo/:userId/add", addTodoController)
todoRouter.get("/todo/:userId/all", returnAllController)

export default todoRouter