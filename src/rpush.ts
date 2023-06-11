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
    process.env.KEY1 &&
    (await client.rPush(process.env.KEY1, [`First value`, `Second value`]));
  const res2 =
    process.env.KEY2 &&
    (await client.rPush(process.env.KEY2, [`First value`, `Second value`]));
  console.log("RPUSH", "RESULT", res);
  console.log("RPUSH", "RESULT", res2);
  client.disconnect();
})();
