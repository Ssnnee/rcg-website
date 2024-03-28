import { z } from "zod";
import { publicProcedure, router } from "../trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const commiteeRouter = router({
  get: publicProcedure.query(async () => {
    return await prisma.committee.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.committee.create({
        data: {
          title: input.title,
          description: input.description,
        },
      });
    }),

    getById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;
      return await prisma.committee.findFirst({
        where: {
          id: input.id,
        },
        include: {
          members: true,
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
      prisma.member.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
