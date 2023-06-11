import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res = await client.flushAll();
  console.log("FLUSHALL", "RESULT", res);
  client.disconnect();
})();
