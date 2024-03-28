import { z } from "zod";
import { publicProcedure, router } from "../trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const membersRouter = router({
  get: publicProcedure.query(async () => {
    return prisma.member.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        name: z.string(),
        resumePdf: z.string(),
        committeeId: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.member.create({
        data: {
          title: input.title,
          name: input.name,
          resumePdf: input.resumePdf,
          committeeId: input.committeeId,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        name: z.string(),
        resumePdf: z.string(),
        committeeId: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.member.update({
        where:{
          id: input.id,
        },
        data: {
          title: input.title,
          name: input.name,
          resumePdf: input.resumePdf,
          committeeId: input.committeeId,
        },
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.member.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

