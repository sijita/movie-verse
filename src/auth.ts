import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "@/utils/axios";

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        try {
          axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
          const res = await axios.post(`/login`, credentials);

          if (res.data?.user) {
            return res.data.user;
          }

          return null;
        } catch (e: any) {
          const errorMessage = e.response?.data?.detail;
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async jwt(params) {
      const { token, user } = params;
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session(params) {
      const { session, token } = params;
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default auth;

export const getServerAuthSession = () => getServerSession(auth);
