import User from "../../../entities/User";
import Verification from "../../../entities/Verification";
import {
  EmailSignUpResponse,
  EmailSignUpMutationArgs
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: EmailSignUpMutationArgs
    ): Promise<EmailSignUpResponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "You should log in instead",
            token: null
          };
        } else {
          const newUser = await User.create({ ...args }).save();
          const emailVerification = await Verification.create({
            payload: newUser.email,
            target: "EMAIL"
          });
          const token = createJWT(newUser.id);
          return {
            ok: true,
            error: null,
            token
          };
        }
      } catch (error) {
        return { ok: false, error: error.message, token: null };
      }
    }
  }
};

export default resolvers;
