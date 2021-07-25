import express from "express";
const router = express.Router();

import queueConfig from "../src/queue";

router.use("/queues", queueConfig);
export default router;
