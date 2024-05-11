import { createServer }  from 'http';
import config from './core/config/envs';
import express from 'express';
import { router } from './router';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

export const launchApp = async () => {
    const server = createServer(app);
    
    server.listen(config.PORT, () => {
        console.log(`Server listening on port ${config.PORT}`);
    });
}