import "reflect-metadata";
import express from 'express';
import routes from './routes';
import cors from 'cors';
import { initContainer } from './bootstrap/campaing';

async function start() {
    await initContainer()
    const app = express();
    app.use(cors({
        origin:"*"
    }))
    app.use(express.json());
    app.use(routes);

    app.listen(3000, () => console.log("server on 3000"));
}
start();


