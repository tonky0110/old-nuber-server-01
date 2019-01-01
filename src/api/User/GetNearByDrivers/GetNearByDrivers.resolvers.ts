import { Between, getRepository } from "typeorm";
import User from "../../../entities/User";
import { GetNearByDriversResponse } from "src/types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

// 근처의 Driver(운전자 - isDriving:true)목록을 찾는 resolver
const resolvers: Resolvers = {
  Query: {
    GetNearByDrivers: privateResolver(
      async (_, __, { req }): Promise<GetNearByDriversResponse> => {
        const user: User = req.user;
        const { lastLat, lastLng } = user;
        try {
          const drivers: User[] = await getRepository(User).find({
            isDriving: true,
            lastLat: Between(lastLat - 0.05, lastLat + 0.05),
            lastLng: Between(lastLng - 0.05, lastLng + 0.05)
          });
          return {
            ok: true,
            error: null,
            drivers
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            drivers: null
          };
        }
      }
    )
  }
};

export default resolvers;
