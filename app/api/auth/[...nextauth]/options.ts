import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })
    ],
    callbacks: {
        async signIn({ user }: any) {
            if (user.email === 'g3orrg301@gmail.com') return true;

            return '/unauthorized';
        }
    }
};
