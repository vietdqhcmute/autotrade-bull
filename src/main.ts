import express from "express";
const app = express();
const port = 8080; // default port to listen

const runApp = () => {
  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};

export default runApp;
