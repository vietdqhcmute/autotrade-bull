import express from "express";
const router = express.Router();

import queueConfig from "./queues";

router.use("/queues", queueConfig);
export default router;
