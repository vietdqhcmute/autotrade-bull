import http from "http";
import config from "../config";
import InitExpress from "./inits/initExpress";
import InitMongo from "./inits/initMongo";

const runApp = async () => {
  try {
    await InitMongo();

    const app = InitExpress();
    const server = http.createServer(app);
    const { PORT } = config.server;

    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default runApp;
