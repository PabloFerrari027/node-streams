import { router } from "./http/router";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use(router);
