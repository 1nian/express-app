import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../uploads"));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const modifiedFileName = Date.now() + ext;

        cb(null, modifiedFileName);
    },
});

router.post(
    "/upload",
    multer({ storage }).single("file"),
    (req: Request, res: Response) => {
        // 构建上传文件的URL
        const fileUrl = `${req.protocol}://${req.get("host")}/${
            req?.file?.filename
        }`;
        res.status(201).send({
            message: "文件上传成功！",
            data: fileUrl,
        });
    }
);

export default router;
