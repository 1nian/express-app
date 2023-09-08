import express, { Request, Response } from "express";
import { chapterModel, Chapter } from "../models/chapter";

const router = express.Router();

// 创建章节
router.post("/create", async (req: Request, res: Response) => {
    try {
        const chapter = new chapterModel(req.body as Chapter);
        await chapter.save();
        res.status(201).send(chapter);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 通过小说ID获取全部章节
router.get("/find/novel/:id", async (req: Request, res: Response) => {
    try {
        const novelID = req.params.id;

        let result = await chapterModel
            .find({ novel_id: novelID })
            .select("title");

        if (!result) {
            return res.status(201).send({ msg: "暂无数据" });
        }

        res.status(201).send({ data: result, msg: "获取成功" });
    } catch (error) {
        res.status(400).send(error);
    }
});

// 获取某一章节内容
router.get("/find/chapter/:id", async (req: Request, res: Response) => {
    try {
        const chapterId = req.params.id;

        let result = await chapterModel
            .findById(chapterId)
            .select(["title", "content"]);

        if (!result) {
            return res.status(201).send({ msg: "暂无数据" });
        }

        res.status(201).send({ data: result, msg: "获取成功" });
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
