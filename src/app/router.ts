import { Router } from "express";

export const router = Router();

// health check
router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Supply Chain Traceability' });
});

