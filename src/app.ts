import { launchApp } from "./app/";
import { launchDB } from "./core";

launchDB().then(launchApp).catch(console.error);

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
}
);

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception thrown:', error);
    process.exit(1);
}
);

