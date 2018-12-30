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
- [ ] JWT 검증

---

### Private Resolvers:

- [ ] Email 검증하기
- [ ] 나의 profile 받기
- [ ] 나의 profile 수정
- [ ] driving상태 변경
- [ ] 나의 장소/방향 보고(report)하기
- [ ] 장소 추가하기
- [ ] 장소 수정하기
- [ ] 장소 삭제하기
- [ ] 주변의 uber기사 보기
- [ ] 주변의 uber기사 구독(위치 정보 받기)

Ride story

- [ ] Ride(택시)요청
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
