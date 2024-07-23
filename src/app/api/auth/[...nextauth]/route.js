
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

import NextAuth from "next-auth"
import mongoose from "mongoose";
import { User } from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
import client from "@/libs/mongoConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(client),
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),

  CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        Email: { label: "Email", type: "email", placeholder: "test@exam.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
     const username = credentials?.username;
     const email = credentials?.email;
      const password = credentials?.password;
     
       mongoose.connect(process.env.MONGO_URL);
       const user = await User.findOne({email});
       const users = await User.findOne({username})
       const passwordOk = user && bcrypt.compareSync(password, user.password);
      

       if (passwordOk) {
          return ({user, users});
      

       }
        return null
      }
    })

]
};
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }