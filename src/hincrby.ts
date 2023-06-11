import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res =
    process.env.KEY1 && (await client.hIncrBy(process.env.KEY1, "second", 10));
  const res2 =
    process.env.KEY2 && (await client.hIncrBy(process.env.KEY2, "second", 3));
  console.log("HINCRBY", "RESULT", res);
  console.log("HINCRBY", "RESULT", res2);
  client.disconnect();
})();
