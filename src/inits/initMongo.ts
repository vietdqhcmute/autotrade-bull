import mongoose from "mongoose";
import config from "../../config";

export default async () => {
  const { prefix, host, port, database, username, password } = config.db;
  const auth = username && password ? `${username}:${password}@` : "";
  const host_port = prefix === "mongodb+srv" ? host : host + ":" + port;

  let link = `${prefix}://${auth}${host_port}/${database}`;
  if (process.env.NODE_ENV === "production" && process.env.MONGO_URL) {
    link = process.env.MONGO_URL;
  }
  console.log(link);
  mongoose
    .connect(link, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => {
      console.log("Connect to MongoDB success");
    })
    .catch((err) => {
      throw err;
    });
};
