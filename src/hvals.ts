import { config } from "dotenv";
import { createClient } from "redis";

config();

(async () => {
  const client = createClient();
  client.on("error", (e) => {
    console.log("An error occured", e);
  });
  client.connect();
  const res = process.env.KEY1 && (await client.hVals(process.env.KEY1));
  const res2 = process.env.KEY2 && (await client.hVals(process.env.KEY2));
  console.log("HVALS", "RESULT", res);
  console.log("HVALS", "RESULT", res2);
  client.disconnect();
})();
