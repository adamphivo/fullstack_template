import { initTRPC } from "@trpc/server";
import { Context } from "./createContext";

const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;
export const router = t.router;
