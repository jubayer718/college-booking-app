// import NextAuth from "next-auth";
// import GoogleProvider from 'next-auth/providers/google';

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login", // custom login page
//   },

// })

import NextAuth from "next-auth";
import Google from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
import Twitter from "next-auth/providers/twitter";
// import { singInSchema } from "./lib/zod";
// import { useUser } from "./components/Hooks/useUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Twitter,
    Credentials({
      credentials: {
        email: {
          type: 'email',
          label: "Email",
          placeholder: "johndoe@gmail.com"
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "enter password"
        }
      },
      authorize: async (credentials) => {
        try {
          const res = await fetch(`${process.env.BACKEND_URL}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            })
          },
          )

          const data = await res.json();
    
          if (res.ok && data.data) {
            return {
              id: data.data.id,
              email: data.data.email,
              name: data.data.name,
            };

          }

          return null;
        } catch (error) {
            console.error("Authorize error:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  pages: {
   signIn:'/login'
 }
})