import { PassThrough, Readable, Transform } from "stream";
import AWS, { S3 } from "aws-sdk";
import { env } from "../env";
import { calculatePercentage } from "../utils/calculate-percentage";

interface uploadCsvS3UseCaseRequest {
  filename: string;
  fileBuffer: Buffer;
}

export async function uploadCsvS3UseCase({
  fileBuffer,
  filename,
}: uploadCsvS3UseCaseRequest): Promise<void> {
  const s3 = new AWS.S3({
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_KEY,
  });

  const uppercase = new Transform({
    transform(chunk, _, callback) {
      const uppercaseString = chunk.toString().toUpperCase();
      callback(null, uppercaseString);
    },
  });

  const passthrough = new PassThrough();

  const params = {
    Bucket: env.AWS_BUCKET_NAME,
    Key: filename,
    Body: passthrough,
  };

  const upload = s3.upload(
    params,
    function (err: any, data: S3.ManagedUpload.SendData) {
      if (err) {
        throw new Error(err);
      }
    }
  );

  const readable = new Readable();
  readable.push(fileBuffer);
  readable.push(null);

  readable.pipe(uppercase).pipe(passthrough);

  const uploadPromise = new Promise<void>((resolve, reject) => {
    upload.on("httpUploadProgress", (progress) => {
      const { loaded, total } = progress;
      calculatePercentage({ loaded, total });
    });

    upload.send((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

  await uploadPromise;
}
