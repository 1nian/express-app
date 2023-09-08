import express from "express";
import { userModel } from "../models/users";

const router = express.Router();

router.get("/find", async (req, res) => {
    let result = await userModel.find();

    res.json({
        code: 0,
        data: result,
        msg: "成功",
    });
});

router.post("/create", async (req, res) => {
    userModel
        .init()
        .then(() => {
            let user = req.body;

            userModel
                .create(user)
                .then(() => {
                    res.json({
                        code: 0,
                        msg: "添加成功",
                    });
                })
                .catch((err) => {
                    res.json({
                        code: 1,
                        msg: "添加失败",
                    });
                });
        })
        .catch((err) => {
            res.status(500).json({
                code: 1,
                message: "Failed to create indexes or insert user.",
            });
        });
});

router.post("/update", async (req, res) => {
    const result = await userModel.updateOne(
        { name: req.body.name },
        { ...req.body }
    );

    if (result.modifiedCount && result.matchedCount) {
        res.json({
            code: 0,
            msg: "成功",
        });
    } else {
        res.json({
            code: 1,
            msg: "失败",
        });
    }
});

router.post("/delete", async (req, res) => {
    const result = await userModel.deleteOne({ _id: req.body.id });

    if (result.deletedCount) {
        res.json({
            code: 0,
            msg: "成功",
        });
    } else {
        res.json({
            code: 1,
            msg: "失败",
        });
    }
});

export default router;
