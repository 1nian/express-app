import mongoose from "mongoose";

export interface User {
    name: string;
    pwd: string;
}

const User = new mongoose.Schema<User>({
    name: {
        type: String,
    },
    pwd: {
        type: String,
    },
});

User.index({ name: 1 }, { unique: true });

export const userModel = mongoose.model("users", User);
