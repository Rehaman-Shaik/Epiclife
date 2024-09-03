import { addWatchList, listAllWatchList } from "../services/watchListService.js";
import { requestLog } from "../services/common/logsRequests.js";

async function addWatchListController(req, res) {
    requestLog(req)
    var is_saved = await addWatchList(req)
    if (is_saved) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(404)
    }

}

async function returnAllWatchListController(req, res) {
    requestLog(req)
    const toDoItems = await listAllWatchList(req)
    if (toDoItems) {
        res.send(toDoItems)
    }
}
export { returnAllWatchListController, addWatchListController }