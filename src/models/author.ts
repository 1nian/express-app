import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String, // 作者姓名
    created_at: { type: Date, default: Date.now }, // 记录创建日期
});

export const authorModel = mongoose.model("Author", authorSchema);
