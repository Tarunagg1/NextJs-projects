import bcryptjs from 'bcryptjs';
import nextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import userModels from '../../../backend/models/user';
import { validateAll } from '../../../backend/utils/common';
import connectToDb from '../../../backend/common/db';


export default nextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
                const { email, password } = credentials;

                try {

                    validateAll(req.body);

                    await connectToDb();
                    const user = await userModels.findOne({ email });

                    if (!user) {
                        throw new Error("user not found");
                    }

                    let userDoc = user._doc;
                    const isMatch = await bcryptjs.compare(password, user.password);

                    if (user && isMatch) {
                        delete userDoc.password;
                        // Any object returned will be saved in `user` property of the JWT
                        return userDoc
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        // return null
                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                        throw new Error('invalid user email or password')
                    }

                } catch (error) {
                    throw new Error(error.message);
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            if (user && user.id) {
                session.user.id = user.id;
            }
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user && user._id) {
                token.id = user._id;
            }
            return token
        }
    }
})