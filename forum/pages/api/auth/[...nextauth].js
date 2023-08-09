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
};
export default NextAuth(authOptions);
