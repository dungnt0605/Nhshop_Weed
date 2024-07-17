import express from "express";
import cors from "cors";
import { connecteDB } from "./config/db";
import product from "./routers/Products";
import category from "./routers/Category";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", product);
app.use("/api", category);

app.listen(8080, async () => {
  await connecteDB();
});

export const viteNodeApp = app;
