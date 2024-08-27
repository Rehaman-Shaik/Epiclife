import { addDiaryEntry, listAllDiaryEntries } from "../services/diaryService.js";


async function addDiaryController(req, res) {
    var is_saved = await addDiaryEntry(req)
    if (is_saved) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(500)
    }

}

async function returnAllDiaryController(req, res){
    const toDoItems = await listAllDiaryEntries(req)
    if (toDoItems){
        res.send(toDoItems)
    }
}
export { returnAllDiaryController, addDiaryController }