import express, { Request, Response } from "express";
import { novelModel, Novel } from "../models/novel";

const router = express.Router();

// 创建文章
router.post("/create", async (req: Request, res: Response) => {
    try {
        const novel = new novelModel(req.body as Novel);
        await novel.save();
        res.status(201).send(novel);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 查询全部文章名称
router.get("/find", async (req: Request, res: Response) => {
    try {
        let result = await novelModel.find();

        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
