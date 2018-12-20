# nuber-server

Server for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS

1.1
yarn add typescript ts-node nodemon tslint-config-prettier --dev
yarn add @types/node --dev


1.2 @types/jsonwebtoken

1.4
install middleware
yarn add graphql-yoga 
yarn add morgan helmet cors
 - morgan: logging
 - helmet: 보안
 - cors: ?
yarn add @types/margan @types/helmet @types/cors --dev

1.6
yarn add graphql-tools merge-graphql-schemas

1.7
allTypes: any
allResolvers: any
mergedTypes: any
mergedResolvers: any
으로 할것.

1.8
yarn add graphql-to-typescript gql-merge --dev
yarn add babel-runtime --dev

api: graphql에서 query, mutation, subscription을 호출하고, 해당 return값을 설정하는 것.
entities: typeorm에서 nodejs의 값과 dbms의 table을 맵핑해 주는것.
