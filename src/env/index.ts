import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  AWS_ACCESS_KEY: z.string(),
  AWS_SECRET_KEY: z.string(),
  AWS_BUCKET_NAME: z.string(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  throw new Error(`❌ Invalid environment variables ${result.error}`);
}

export const env = result.data;
