import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/user";
import bcrypt from 'bcryptjs';
import { connectMongoDB } from "@/lib/mongodb";

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { email, password } = credentials;
  
          try {
            await connectMongoDB();
            const user = await User.findOne({ email });
  
            if (!user) {
              return null;
            }
  
            const passwordsMatch = await bcrypt.compare(password, user.password);
  
            if (!passwordsMatch) {
              return null;
            }
  
            return user;
          } catch (error) {
            console.log("Error: ", error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/",
    },
  };

const handler = NextAuth(authOptions);

export{ handler as GET, handler as POST}