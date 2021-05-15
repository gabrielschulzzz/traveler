import "reflect-metadata";
import cors from "cors";
import express from "express";

import "@shared/infra/typeorm";
import "@shared/container";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running 🚀"));
