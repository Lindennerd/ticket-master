// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { organizationRouter } from "./organization.router";

export const appRouter = router({
  auth: authRouter,
  organization: organizationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
