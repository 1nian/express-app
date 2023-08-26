import express from "express";
import { authorModel } from "../models/author";
import { novelModel } from "../models/novel";
import { chapterModel } from "../models/chapter";

const router = express.Router();

router.post("/authors", async (req, res) => {
    try {
        const author = new authorModel(req.body);
        await author.save();
        res.status(201).send(author);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/novels", async (req, res) => {
    try {
        const novel = new novelModel(req.body);
        await novel.save();
        res.status(201).send(novel);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/chapters", async (req, res) => {
    try {
        const chapter = new chapterModel(req.body);
        await chapter.save();
        res.status(201).send(chapter);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
