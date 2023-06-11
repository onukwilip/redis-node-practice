import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res = process.env.KEY1 && (await client.lPop(process.env.KEY1));
  const res2 = process.env.KEY2 && (await client.lPop(process.env.KEY2));
  console.log("LPOP", "RESULT", res);
  console.log("LPOP", "RESULT", res2);
  client.disconnect();
})();