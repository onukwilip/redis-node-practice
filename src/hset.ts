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
    (await client.hSet(
      process.env.KEY1,
      "first",
      `This is the value of first`
    ));
  const res2 =
    process.env.KEY2 &&
    (await client.hSet(
      process.env.KEY2,
      "first",
      `This is the value of first`
    ));
  console.log("HSET", "RESULT", res);
  console.log("HSET", "RESULT", res2);
  client.disconnect();
})();
