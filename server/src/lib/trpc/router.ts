import { publicProcedure, router } from ".";
import prisma from "../prisma";

export const appRouter = router({
  getUser: publicProcedure.query(() => {
    return [1, 2, 3, 4, 5, 6, 1, 8];
  }),
  getTime: publicProcedure.query(() => {
    return new Date().toLocaleTimeString();
  }),
  getUsers: publicProcedure.query(async () => {
    return await prisma.user.findMany({});
  }),
});

export type AppRouter = typeof appRouter;
