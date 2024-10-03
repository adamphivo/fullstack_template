import { createContext } from "@/lib/trpc/createContext";
import { appRouter } from "@/lib/trpc/router";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import "./loadEnv";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on ${process.env.SERVER_PORT}`);
});
