import express from 'express';
import financeRouter from './routes/financeRouter.js'
import { mainController } from './controllers/mainController.js';
import usersRouter from './routes/usersRouter.js'
import cors from "cors"

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log('Server is started running on https://rehamanshaikofficial.xyz')
})

app.get("/", mainController);

app.use("/", financeRouter)
app.use("/", usersRouter)
