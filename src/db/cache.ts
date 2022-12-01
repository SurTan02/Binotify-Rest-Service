import { REDIS_PORT, REDIS_URL } from "./../config/vars.config";
import { createClient, RedisClientType } from "redis";

let redisClient: RedisClientType;

export const init = () => {
  try {
    redisClient = createClient({
      socket: {
        host: REDIS_URL,
        port: REDIS_PORT,
      },
    });

    console.debug("Cache connected!");
  } catch (error) {
    console.error("[Error]: ", error);
    throw new Error("Fail to connect cache!");
  }
};

export const cache = () => {
  return redisClient;
};
