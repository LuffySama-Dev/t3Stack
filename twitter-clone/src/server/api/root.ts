import { createTRPCRouter } from "~/server/api/trpc";
import { tweetRouter } from "~/server/api/routers/tweet";

export const appRouter = createTRPCRouter({
  tweet: tweetRouter,
});

export type AppRouter = typeof appRouter;
