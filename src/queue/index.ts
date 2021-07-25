import Queue from "bull";
import config from "../../config";

export const NOTIFY_URL = "NOTIFY_URL";

export const queues = {
  [NOTIFY_URL]: new Queue(NOTIFY_URL, {
    redis: process.env.REDIS_URI || "redis://127.0.0.1:6379",
  }),
};
