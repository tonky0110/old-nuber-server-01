import bcrypt from "bcrypt";

const encryptPassword = prevPlainText => {
  const BCRYPT_ROUNDS = 10;
  const nextHash = bcrypt.hash(prevPlainText, BCRYPT_ROUNDS);
  return nextHash;
};

export default encryptPassword;
