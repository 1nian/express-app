import express, { Request, Response } from "express";
import { novelModel, Novel } from "../models/novel";

const router = express.Router();

// 创建小说
router.post("/create", async (req: Request, res: Response) => {
    try {
        const novel = new novelModel(req.body as Novel);
        await novel.save();
        res.status(201).send(novel);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
