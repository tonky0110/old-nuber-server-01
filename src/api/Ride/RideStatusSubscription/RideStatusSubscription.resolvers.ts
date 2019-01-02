import { withFilter, PubSub } from "graphql-yoga";
import User from "src/entities/User";

const resolvers = {
  Subscription: {
    RideStatusSubscription: {
          Subscribe: withFilter(
              (_, __, { pubSub }) => pubSub.asyncIterator("rideUpdate"),
              (payload, _, {context}) => {
                  const user: User = context.currentUser;
                  const {
                      RideStatusSubscription: { driverId, passengerId }
                  } = payload;
                  
                  return user.id === driverId || user.id === passengerId;
              }
    }
  }
};