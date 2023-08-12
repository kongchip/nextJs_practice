import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'ae49bd8c5d2716076334',
      clientSecret: '495733aba101bd7801eea3ef3d5510a229f4fc7a',
    }),
  ],
  secret: 'githubkongchip',
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
