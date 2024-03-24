import {
	User as PrismaUser,
} from "@prisma/client";
import { User as NextAuthUser } from "next-auth";
export type CustomUser = NextAuthUser & PrismaUser;