import { Router } from "express";
import { FileController } from "./controllers/csv-controller";
import multer from "multer";

export const router = Router();
const fileController = new FileController();

const multerConfig = multer();
router.post("/upload", multerConfig.single("file"), fileController.filter);
