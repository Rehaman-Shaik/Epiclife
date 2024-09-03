import { addTodo, listTodo } from "../services/todoService.js";
import { requestLog } from "../services/common/logsRequests.js";

function todoController(req, res) {
    requestLog(req)
    res.json({ "todo": "todo" })
}

async function addTodoController(req, res) {
    requestLog(req)
    var is_saved = await addTodo(req)
    if (is_saved) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(404)
    }

}

async function returnAllController(req, res) {
    requestLog(req)
    const toDoItems = await listTodo(req)
    if (toDoItems) {
        res.send(toDoItems)
    }
}
export { todoController, addTodoController, returnAllController }