import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

// import router from "../routes";
export default () => {
  const app = express();
  app.disable("x-power-by");
  app.use(morgan("dev"));
  app.use(cors());

  app.use(
    "/static",
    express.static(path.join(__dirname, "../uploads/avatars"))
  );
  // app.use('/', router)

  return app;
};
