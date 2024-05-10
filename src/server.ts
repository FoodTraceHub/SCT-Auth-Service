import { createServer }  from 'http';
import config from './core/config/envs';
import { app } from './app/service';

export const launchApp = async () => {
    const server = createServer(app);
    
    server.listen(config.PORT, () => {
        console.log(`Server listening on port ${config.PORT}`);
    });
}