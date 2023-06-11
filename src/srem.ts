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
    process.env.KEY1 && (await client.sRem(process.env.KEY1, "First value"));
  const res2 =
    process.env.KEY2 &&
    (await client.sRem(process.env.KEY2, ["First value", "Second value"]));
  console.log("SMEMBERS", "RESULT", res);
  console.log("SMEMBERS", "RESULT", res2);
  client.disconnect();
})();
