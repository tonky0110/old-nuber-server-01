import { Between, getRepository } from "typeorm";
import User from "../../../entities/User";
import Ride from "../../../entities/Ride";
import { GetNearbyRidesResponse } from "../../../types/graph";
import privateResolver from "../../../utils/privateResolver";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetNearbyRides: privateResolver(
      async (_, __, { req }): Promise<GetNearbyRidesResponse> => {
        const user: User = req.user; // const { user }: { user: User } = req; 도 가능하지만, type을 지정할 수 없음.
        const { lastLat, lastLng } = user;
        if (user.isDriving) {
          try {
            const rides = await getRepository(Ride).find({
              status: "REQUESTING",
              pickUpLat: Between(lastLat - 0.05, lastLat + 0.05),
              pickUpLng: Between(lastLng - 0.05, lastLng + 0.05)
            });
            return {
              ok: true,
              error: null,
              rides
            };
          } catch (error) {
            return {
              ok: false,
              error: error.message,
              rides: null
            };
          }
        } else {
          return {
            ok: false,
            error: "You are not a driver",
            rides: null
          };
        }
      }
    )
  }
};

export default resolvers;
