import { GraphqlContext } from "../types.utils";

const comments = {
  Query: {
    getComments: async (_: any, __: any, context: GraphqlContext) => {
      const { prisma } = context;
      return await prisma.comment.findMany();
    },
  },

  Mutation: {
    createComment: async (
      _: any,
      input: { comment: string },
      context: GraphqlContext
    ) => {
      //   console.log(input);
      const { comment } = input;
      const { prisma } = context;

      const { id } = await prisma.comment.create({
        data: { comment },
      });

      return {
        id,
        comment,
      };
    },
  },
};

export default comments;
