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
    process.env.KEY1 && (await client.hGet(process.env.KEY1, "first"));
  const res2 =
    process.env.KEY2 && (await client.hGet(process.env.KEY2, "first"));
  console.log("HGET", "RESULT", res);
  console.log("HGET", "RESULT", res2);
  client.disconnect();
})();
