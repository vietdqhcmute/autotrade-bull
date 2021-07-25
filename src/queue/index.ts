import Bull from "bull";
import Arena from "bull-arena";

const fakeQueues = [
  { type: "bull", name: "Notification_Emailer" },
  { type: "bull", name: "Reported_Engine" },
  { type: "bull", name: "Trading" },
];

const getQueues = () =>
  fakeQueues.map((item) => {
    return {
      type: item.type,
      name: item.name,
      hostId: "Worker",
      redis: {
        host: "localhost",
        port: Number(6379),
      },
    };
  });

const arenaConfig = Arena(
  {
    Bull,
    queues: getQueues(),
  },
  {
    disableListen: true,
  }
);

export default arenaConfig;
