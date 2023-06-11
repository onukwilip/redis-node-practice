import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res = process.env.KEY1 && (await client.decrBy(process.env.KEY1, 7));
  const res2 = process.env.KEY2 && (await client.decrBy(process.env.KEY2, 5));
  console.log("DECRBY", "RESULT", res);
  console.log("DECRBY", "RESULT", res2);
  client.disconnect();
})();
