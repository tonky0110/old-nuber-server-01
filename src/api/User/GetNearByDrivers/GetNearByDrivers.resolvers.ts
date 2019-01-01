import User from "../../../entities/User";
import { GetNearByDriversResponse } from "src/types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { Between } from "typeorm";

const resolvers: Resolvers = {
  Query: {
    GetNearByDrivers: privateResolver(
      async (_, __, { req }): Promise<GetNearByDriversResponse> => {
        const user: User = req.user;
        const { lastLat, lastLng } = user;
        const drivers = await User.find({
          isDriving: true,
          lastLat: Between(lastLat - 0.05, lastLat + 0.05),
          lastLng: Between(lastLng - 0.05, lastLng + 0.05)
        });
      }
    )
  }
};

export default resolvers;
