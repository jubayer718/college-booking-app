import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // custom login page
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub || "";
      return session;
   },
 },
})

