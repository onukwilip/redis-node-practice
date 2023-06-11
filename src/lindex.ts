import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res = process.env.KEY1 && (await client.lIndex(process.env.KEY1, 0));
  const res2 = process.env.KEY2 && (await client.lIndex(process.env.KEY2, 0));
  console.log("LINDEX", "RESULT", res);
  console.log("LINDEX", "RESULT", res2);
  client.disconnect();
})();
