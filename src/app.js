import express from "express";
import { connecteDB } from "./config/db";
import product from "./routers/Products";

const app = express();

app.use("/api", product);

app.listen(8080, async () => {
  await connecteDB();
});

export const viteNodeApp = app;
