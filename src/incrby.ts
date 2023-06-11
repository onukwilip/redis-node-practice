import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res = process.env.KEY1 && (await client.incrBy(process.env.KEY1, 10));
  const res2 = process.env.KEY2 && (await client.incrBy(process.env.KEY2, 3));
  console.log("INCRBY", "RESULT", res);
  console.log("INCRBY", "RESULT", res2);
  client.disconnect();
})();
