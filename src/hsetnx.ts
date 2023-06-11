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
    (await client.hSetNX(
      process.env.KEY1,
      "first",
      `This is the value of first`
    ));
  const res2 =
    process.env.KEY2 &&
    (await client.hSetNX(
      process.env.KEY2,
      "first",
      `This is the value of first`
    ));
  console.log("HSETNX", "RESULT", res);
  console.log("HSETNX", "RESULT", res2);
  client.disconnect();
})();
