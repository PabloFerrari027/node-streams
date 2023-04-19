import { Request, Response } from "express";
import { uploadCsvS3UseCase } from "../../use-case/upload-csv-s3-use-case";
import { randomUUID } from "crypto";

export class FileController {
  async filter(req: Request, res: Response) {
    if (!req.file) return res.status(400).send("No file found");

    const fileBuffer = req.file.buffer;
    const filename = `${req.file.originalname.split(".")[0]}-${randomUUID()}`;

    try {
      await uploadCsvS3UseCase({ filename, fileBuffer });
      return res.send();
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  }
}
