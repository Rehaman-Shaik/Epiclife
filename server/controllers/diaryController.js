import { addDiaryEntry, listAllDiaryEntries } from "../services/diaryService.js";
import { requestLog } from "../services/common/logsRequests.js";


async function addDiaryController(req, res) {
    requestLog(req)
    var is_saved = await addDiaryEntry(req)
    if (is_saved) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(500)
    }

}

async function returnAllDiaryController(req, res) {
    requestLog(req)
    const toDoItems = await listAllDiaryEntries(req)
    if (toDoItems) {
        res.send(toDoItems)
    }
}
export { returnAllDiaryController, addDiaryController }