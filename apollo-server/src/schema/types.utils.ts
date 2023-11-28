import { Context } from "graphql-ws";
// import { Session } from "next-auth";
import { PubSub } from "graphql-subscriptions";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultSession, Session } from "next-auth";
import {
  conversationPopulated,
  participantPopulated,
} from "./resolvers/conversations";

export interface UsernameData {
  createUsername: {
    succeess: boolean;
    error: string;
  };
}

// export interface User {
//   id: string;
//   username: string;
// }

// export interface Session {
//   user?: User;
// }

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      username?: string;
    };
  }
}

export interface UsernameVariables {
  username: string;
}

export interface GraphqlContext {
  // session: Session | null;
  prisma: PrismaClient;
  pubsub: PubSub;
}

export interface CreateUsernameResponse {
  success?: Boolean;
  error?: String;
}

export interface SearchUserInput {
  username: string;
}

export interface SearchsUsersData {
  searchUsers: SearchedUser[];
}

export interface SearchedUser {
  id: string;
  username: string;
}

// conversations

export interface createConversationData {
  createConversation: {
    conversationId: string;
  };
}

export interface createConversationInput {
  participantId: Array<string>;
}

// conversations

export type ConversationPopulated = Prisma.ConversationGetPayload<{
  include: typeof conversationPopulated;
}>;

export type ParticipantPopulated = Prisma.ConversationParticipantGetPayload<{
  include: typeof participantPopulated;
}>;
// export interface ConversationsData {
//   conversations: Array<ConversationPopulated>;
// }

// export type ParticipantPopulated = Prisma.ConversationParticipantGetPayload<{
//   include: typeof participantPopulated;
// }>;

export interface SubscriptionCtx extends Context {
  connectionParams: {
    session?: Session;
  };
}
