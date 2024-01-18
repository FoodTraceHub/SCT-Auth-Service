import { createServer }  from 'http';
import { config } from '../core';
import { app } from './service';

export const launchApp = async () => {
    const server = createServer(app);
    
    server.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}`);
    });
}