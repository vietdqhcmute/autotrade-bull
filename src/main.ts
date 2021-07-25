import http from "http";
import config from "../config";
import initExpress from "./inits/initExpress";
const port = 8080; // default port to listen

const runApp = () => {
  try {
    const app = initExpress();
    const server = http.createServer(app);
    const { PORT } = config.server;

    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default runApp;
