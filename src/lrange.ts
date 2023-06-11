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
    process.env.KEY1 && (await client.lRange(process.env.KEY1, 0, 10));
  const res2 =
    process.env.KEY2 && (await client.lRange(process.env.KEY2, 0, -1));
  console.log("LRANGE", "RESULT", res);
  console.log("LRANGE", "RESULT", res2);
  client.disconnect();
})();
