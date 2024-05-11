import { Router } from "express";
import { authRouter } from "./auth.router";

export const router = Router();

// auth routes
router.use('/auth', authRouter);

// health check
router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Supply Chain Traceability' });
});

