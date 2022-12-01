import { IPenyanyi } from "./../model/user.model";
import { REDIS_PORT, REDIS_URL } from "./../config/vars.config";
import { createClient, RedisClientType } from "redis";
import * as db from "./connection";

let redisClient: RedisClientType;

export const init = async () => {
  try {
    redisClient = createClient({
      socket: {
        host: REDIS_URL,
        port: REDIS_PORT,
      },
    });

    await redisClient.connect();

    console.debug("Cache connected!");

    const listOfUser: IPenyanyi[] = await db.execute(
      `SELECT user_id, name FROM User WHERE isAdmin = 0`,
      []
    );

    listOfUser.forEach(async (user) => {
        await redisClient.set(user.user_id.toString(), user.name);
    })

    console.debug("Cache updated!");

  } catch (error) {
    console.error("[Error]: ", error);
    throw new Error("Fail to connect cache!");
  }
};

export const cache = () => {
  return redisClient;
};
