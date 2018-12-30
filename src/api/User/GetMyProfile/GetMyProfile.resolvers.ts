import { Resolvers } from "src/types/resolvers";
import { GetMyProfileResponse } from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: async (_, __, { req }): Promise<GetMyProfileResponse> => {
      const { user } = req;
      console.log(user);
      try {
        return {
          ok: false,
          error: null,
          user
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};

export default resolvers;
