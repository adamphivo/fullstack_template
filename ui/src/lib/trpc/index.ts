import { createTRPCReact } from "@trpc/react-query";
import { inferRouterInputs } from "@trpc/server";
import type { AppRouter } from "../../../../server/src/lib/trpc";

export const trpc = createTRPCReact<AppRouter>();

export type RouterOutput = inferRouterInputs<AppRouter>;
export type RouterInput = inferRouterInputs<AppRouter>;
