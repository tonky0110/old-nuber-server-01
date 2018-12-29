import jwt from "jsonwebtoken";

/*
    로직 설명:
        사용자의 userId를 받아서 function에 넣고, string으로 반환.
        사용자가 request에 token을 다시 보내면, 검증 후 정상 사용자 여부를 확인.
*/
const createJWT = (id: number): string => {
  const token = jwt.sign({ id }, process.env.JWT_TOKEN || "");
  return token;
};

export default createJWT;
