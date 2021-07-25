// const dbConfig = {
//   host: 'ds211558.mlab.com',
//   port: 11558,
//   database: 'bb-test',
//   username: 'bb-test',
//   password: '123456'
// };

const dbConfig = {
  prefix: process.env.MONGO_PREFIX || "mongodb",
  host: process.env.MONGO_HOST || "localhost",
  port: process.env.MONGO_PORT || "27017",
  database: process.env.MONGO_DB || "bb-test",
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
};

export default dbConfig;
