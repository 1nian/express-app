import mongoose from "mongoose";

const novelSchema = new mongoose.Schema({
    title: String, // 小说标题
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }, // 关联到作者的唯一标识符
    genre: String, // 小说类型/流派
    created_at: { type: Date, default: Date.now }, // 小说创建日期
});

export const novelModel = mongoose.model("Novel", novelSchema);
