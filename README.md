# nuber-server

Server for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS

GraphQL이란 간단히 말하면, 데이터를 요청하는 방법을 정의한 문법
특징

1. 필요한 데이터만 요청할 수 있다.
2. 한번의 요청으로 여러 리소스의 데이터를 전송받을 수 있다.
3. 타입 시스템(type system)을 활용하여 데이터를 정의한다.

- 스키마의 정의 - GraphQL에서 Object의 하위 정보
- resolve - 추상적으로 구현된 스키마와 서버의 기능을 실제 쿼리될때 작동하게 하는 함수
- Resolver - query에서 특정 필드에 대한 요청이 있을 때, 그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할

  1.1
  yarn add typescript ts-node nodemon tslint-config-prettier --dev
  yarn add @types/node --dev

  1.2 @types/jsonwebtoken

  1.4
  install middleware
  yarn add graphql-yoga
  yarn add morgan helmet cors

* morgan: logging
* helmet: 보안
* cors: ?
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

## Resolvers

User story

### Public Resolvers:

- [x] Facebook으로 로그인/회원가입
- [x] Email로 로그인
- [x] 전화번호로 인증 요청
- [x] 전화번호로 인증 확인
- [x] Email로 회원가입

---

### Authentication(인증)

- [x] JWT 생성
- [x] JWT 검증

---

### Private Resolvers:

- [x] Email 검증하기
- [x] 나의 profile 받기
- [x] 나의 profile 수정
- [x] 운전모드 전환(toggle driving mode)
- [x] report location(위치정보 보내기(계속-subscription))
- [x] 장소 추가하기
- [x] 장소 수정하기
- [x] 장소 삭제하기
- [x] 내 (등록된)장소 찾기

Ride story

- [x] 주변의 uber기사 보기
- [x] 주변의 uber기사 구독(위치 정보 받기)
- [x] Ride(택시)요청
- [ ] 주변의 Ride요청 받기(기사가)
- [ ] 주변의 Ride요청 구독(기사가 호출 대기상태)
- [ ] Ride 상태 구독(요청자가 Ride요청이 accept되기를 기다리는 상태)
- [ ] 채팅방 생성(chat room)
- [ ] 채팅방 구독(새로운 메시지 push)
- [ ] 메시지 보내기

## Code Challenge

- [ ] Ride요청 history보기
- [ ] Ride 상세보기
- [ ]

JWT - JSON Web Token(1.41 createJWT강의 참조)

context - express server가 가지고 있는 정보.
모든 resolvers에 파라메터로 전달되어 request의 user 정보를 전달.

currying
authResolver(awesomeResolver);
--> authResolver(async() => void);
--> authResolverResult(parent, args, context, info);

typeORM
Table의 relationship을 load하지 않음()
불필요한 relation을 loading하지 않고, entities에서 FK를 등록하여 조회할 수 있음.
--> resolver에서 조회 시 'relations'옵션을 주지 않고 대상 entity만 조회할 수 있음.
ID: 1 -{"X-JWT":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ2MTczMTg1fQ.W6VDmZb8dC8Cvv35PcznAR5hJfqYEQRDy0GrVJ4a

Subscription(구독)
DB의 값이 변경되면 해당하는 정보를 SUBSCRIPTION하는 USER에서 자동으로 PUBLISH하는 기능.
Redies, Memcashed같은 사용버전으로 사용할것.
subscription은 HTTP가 아닌 WebSocket에서 실시간으로 만들어짐.
WebSocket인증: 인증을 한번하면, 서버가 해당 인증정보를 서버메모리에 저장하고 있음.

default value 설정
const { connection: { context = null } = {} } = req;
