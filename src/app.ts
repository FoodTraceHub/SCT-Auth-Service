import { launchApp } from "./server";
import { connectDB } from "./core";

connectDB().then(launchApp).catch(console.error);

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
}
);

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception thrown:', error);
    process.exit(1);
}
);

