import mongoose from "mongoose";

export interface Novel {
    // 小说名称
    name: string;
    // 小说类型
    tag: string[];
    created_at: Date;
}

const novelSchema = new mongoose.Schema<Novel>({
    name: String,
    tag: [String],
    created_at: { type: Date, default: Date.now },
});

export const novelModel = mongoose.model("Novel", novelSchema);
