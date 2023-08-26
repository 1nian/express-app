import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    novel_id: { type: mongoose.Schema.Types.ObjectId, ref: "Novel" }, // 关联到小说的唯一标识符
    title: String, // 章节标题
    content: String, // 章节内容
    published_at: Date, // 章节发布日期
});

export const chapterModel = mongoose.model("Chapter", chapterSchema);
