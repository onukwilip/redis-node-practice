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
    process.env.KEY2 &&
    process.env.KEY7 &&
    (await client.sInterStore(process.env.KEY7, [
      process.env.KEY1,
      process.env.KEY2,
    ]));
  console.log("SINTERSTORE", "RESULT", res);
  client.disconnect();
})();