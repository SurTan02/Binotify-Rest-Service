import { createHash } from "crypto";
import { PW_HASH_TYPE } from "../config/vars.config";

export default function hash(password: string): string {
  return createHash(PW_HASH_TYPE).update(password, "utf-8").digest("hex");
}
