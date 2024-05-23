import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string(), int: z.number() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}, the number is ${input.int}`,
        location: '/posts',
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(({ input }) => {

      return {
          name: input.name,
      };
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
