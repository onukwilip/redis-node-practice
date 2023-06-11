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
    (await client.hmGet(process.env.KEY1, ["first", "second"]));
  const res2 =
    process.env.KEY2 &&
    (await client.hmGet(process.env.KEY2, ["first", "second"]));
  console.log("HMGET", "RESULT", res);
  console.log("HMGET", "RESULT", res2);
  client.disconnect();
})();
