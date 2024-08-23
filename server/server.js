import dotenv from 'dotenv';
import express from 'express';
import financeRouter from './routes/financeRouter.js'
import usersRouter from './routes/usersRouter.js'
import portfolioRouter from './routes/portfolioRouter.js'
import todoRouter from './routes/todoRouter.js'
import { mainController } from './controllers/mainController.js';
import cors from "cors"

dotenv.config();
const app = express();
const port = process.env.PORT
app.use(express.static("public"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log('Server is started running on', process.env.DOMAIN)
})

app.get("/", mainController);

app.use("/", financeRouter)
app.use("/", usersRouter)
app.use("/", portfolioRouter)
app.use("/", todoRouter)
