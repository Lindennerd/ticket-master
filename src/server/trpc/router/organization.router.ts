import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const organizationRouter = router({
  getUsersOrganization: protectedProcedure.query(async ({ input, ctx }) => {
    return await ctx.prisma.organizationUsers.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
});
