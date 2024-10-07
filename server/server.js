import dotenv from 'dotenv';
import express from 'express';
import financeRouter from './routes/financeRouter.js'
import usersRouter from './routes/usersRouter.js'
import portfolioRouter from './routes/portfolioRouter.js'
import todoRouter from './routes/todoRouter.js'
import diaryRouter from './routes/diaryRouter.js'
import watchListRouter from './routes/watchListRouter.js'
import { mainController } from './controllers/mainController.js';
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';


dotenv.config();
const app = express();
const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static("public"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('Server is started running on', process.env.DOMAIN)
})

app.get("/", mainController);   

app.use("/", financeRouter)
app.use("/", usersRouter)
app.use("/", portfolioRouter)
app.use("/", todoRouter)
app.use("/", diaryRouter)
app.use("/", watchListRouter)
app.use("/", todoRouter)


app.get('/project/keeper-app', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'), function (err) {
        if (err) {
            res.redirect("/");
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'), function (err) {
        if (err) {
            res.redirect("/");
        }
    });
});


app.get('/project/epic-life', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'), function (err) {
        if (err) {
            res.redirect("/");
        }
    });
});