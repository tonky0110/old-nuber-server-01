import { withFilter } from "graphql-yoga";
import User from "src/entities/User";

const resolvers = {
  Subscription: {
    NearbyRideSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("requestRide"),
        (payload, _, { context }) => {
          const user: User = context.currentUser;
          const {
            NearbyRideSubscription: { pickUpLat, pickUpLng }
          } = payload;
          const { lastLat: userLastLat, lastLng: userLastLng } = user; // Dirver
          return (
            pickUpLat >= userLastLat - 0.05 &&
            pickUpLat <= userLastLat + 0.05 &&
            pickUpLng >= userLastLng - 0.05 &&
            pickUpLng <= userLastLng + 0.05
          );
        }
      )
    }
  }
};

export default resolvers;
