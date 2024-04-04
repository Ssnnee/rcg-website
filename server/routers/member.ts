import { z } from "zod";
import { publicProcedure, router } from "../trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const memberUpdateSchema = z.object({
  id: z.number(),
  title: z.string(),
  name: z.string(),
})
export const membersRouter = router({
  getMembers: publicProcedure
  .input(
    z.object({
      committeeId: z.number(),
    })
  )
  .query(async (opts) => {
    const {input} = opts;
    return prisma.member.findMany(
      {
        where:{
          committeeId: input.committeeId
        }
      }
    );
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
    .input(memberUpdateSchema)
    .mutation(({ input }) => {
      return prisma.member.update({
        where: {
          id: input.id,
        },
        data: memberUpdateSchema.parse(input),
      });
    }),

    updateFile: publicProcedure
    .input(
      z.object({
        id: z.number(),
        resumePdf: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.member.update({
        where: {
          id: input.id,
        },
        data: {
          resumePdf: input.resumePdf,
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

