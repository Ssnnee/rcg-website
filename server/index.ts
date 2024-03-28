import { router } from "./trpc";

import { commiteeRouter } from "./routers/committee";
import { membersRouter } from "./routers/member";

export const appRouter = router({
  committee: commiteeRouter,
  member: membersRouter,
});

export type AppRouter = typeof appRouter;
