import { publicProcedure, router } from ".";

export const appRouter = router({
  getUser: publicProcedure.query(({}) => {
    return [1, 2, 3, 4, 5, 6, 1, 8];
  }),
});

export type AppRouter = typeof appRouter;
