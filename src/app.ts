import express from "express";
import mongoose from "mongoose";

import user from "./router/user";
import chapter from "./router/chapter";
import novel from "./router/novel";

const app = express();

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.json({ limit: "100mb" }));

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
