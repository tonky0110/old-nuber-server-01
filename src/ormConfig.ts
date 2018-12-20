import { ConnectionOptions } from 'typeorm';

const connectionOption: ConnectionOptions = {
  type: 'postgres',
  database: "nuber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "nuber",
  password: process.env.DB_PASSWORD || ""
};

export default connectionOption;