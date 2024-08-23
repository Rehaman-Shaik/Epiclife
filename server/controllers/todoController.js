import { addTodo, listTodo } from "../services/todoService.js";

function todoController(req, res) {
    res.json({ "todo": "todo" })
}

async function addTodoController(req, res) {
    var is_saved = await addTodo(req)
    if (is_saved) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(404)
    }

}

async function returnAllController(req, res){
    const toDoItems = await listTodo(req)
    if (toDoItems){
        res.send(toDoItems)
    }
}
export { todoController, addTodoController, returnAllController }