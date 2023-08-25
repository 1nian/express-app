import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routers/userRouters";

const app = express();

app.use(express.json());

// 地址+端口号+库名称
const url = "mongodb://127.0.0.1:27017/testdatabase";

mongoose.connect(url);

mongoose.connection.once("open", () => {
    console.log("连接成功");
});

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});