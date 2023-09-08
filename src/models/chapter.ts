import mongoose from "mongoose";

export interface Chapter {
    // 章节标题
    title: string;
    // 章节内容
    content: string;
    // 关联文章标识
    novel_id: any;
    created_at: Date;
}

const chapterSchema = new mongoose.Schema<Chapter>({
    novel_id: { type: mongoose.Schema.Types.ObjectId, ref: "Novel" },
    title: String,
    content: String,
    created_at: Date,
});

export const chapterModel = mongoose.model("Chapter", chapterSchema);
