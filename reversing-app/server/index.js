import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import indexRouter from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRouter);
app.use(userRoutes);
app.listen(PORT);
console.log(`on ${PORT}`);
