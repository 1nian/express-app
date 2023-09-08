import express from "express";
import mongoose from "mongoose";

import user from "./controller/user";
import chapter from "./controller/chapter";
import novel from "./controller/novel";

const app = express();

app.use(express.json());

// 地址+端口号+库名称
const url = "mongodb://127.0.0.1:27017/library_database";

mongoose.connect(url);

mongoose.connection.once("open", () => {
    console.log("连接成功");
});

app.use("/user", user);
app.use("/novel", novel);
app.use("/chapter", chapter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
