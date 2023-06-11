import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res1 = process.env.KEY1 && (await client.ttl(process.env.KEY1));
  const res2 = process.env.KEY2 && (await client.ttl(process.env.KEY2));
  console.log("TTL", "RESULT", res1);
  console.log("TTL", "RESULT", res2);
  client.disconnect();
})();
