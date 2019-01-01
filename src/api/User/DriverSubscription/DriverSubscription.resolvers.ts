// Uber고객(승객)이 주면의 drivers를 요청하는 resolver
const resolvers = {
  Subscription: {
    DriverSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("driverUpdate");
      }
    }
  }
};
export default resolvers;
