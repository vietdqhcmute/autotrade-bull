import Bull from "bull";
import Arena from "bull-arena";

const arenaConfig = Arena(
  {
    Bull,
    queues: [
      {
        type: "bull",
        name: "Notification_Emailer",
        hostId: "BullQueues",
        redis: {
          host: "localhost",
          port: Number(6379),
        },
      },
    ],
  },
  {
    disableListen: true,
  }
);

export default arenaConfig;
