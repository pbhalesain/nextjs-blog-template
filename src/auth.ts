import { db } from "@/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { CustomUser } from "./types";

export const {handlers : {GET, POST}, auth, signIn, signOut} = NextAuth({
	pages: {
		error: "/login",
	},
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),
		// ...add more providers here
	],
	adapter: PrismaAdapter(db),
	callbacks: {
		jwt: async ({ token, user }) => {
		  if (!token || !token.email) {
		    return {};
		  }
		  if (user) {
		    token.user = user;
		  }
		  return token;
		},
		session: async ({ session, token }) => {
		  (session.user as CustomUser) = {
		    id: token?.sub, // Add null check for 'token'
		    // @ts-ignore
		    ...(token || session).user,
		  };
		
		  return session;
		},
	},
	// A database is optional, but required to persist accounts in a database
	// database: process.env.DATABASE_URL,
});