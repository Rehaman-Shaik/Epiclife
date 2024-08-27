import { addWatchList, listAllWatchList } from "../services/watchListService.js";


async function addWatchListController(req, res) {
    var is_saved = await addWatchList(req)
    if (is_saved) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(404)
    }

}

async function returnAllWatchListController(req, res){
    const toDoItems = await listAllWatchList(req)
    if (toDoItems){
        res.send(toDoItems)
    }
}
export { returnAllWatchListController, addWatchListController }