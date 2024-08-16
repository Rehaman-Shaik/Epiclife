import express from 'express';
import financeRouter from './routes/financeRouter.js'
import { mainController } from './controllers/mainController.js';

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log('Server is started running on http://rehamanshaikofficial.xyz')
})

app.get("/", mainController);

app.use("/", financeRouter)
