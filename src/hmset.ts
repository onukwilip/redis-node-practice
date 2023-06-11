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
    process.env.KEY4 &&
    (await client.sendCommand([
      "hmset",
      process.env.KEY4,
      "first",
      `This is the value of the first key`,
      "second",
      `This is the value of the second key`,
    ]));
  const res2 =
    process.env.KEY5 &&
    (await client.sendCommand([
      "hmset",
      process.env.KEY5,
      "first",
      `This is the value of the first key`,
      "second",
      `This is the value of the second key`,
    ]));
  console.log("HMSET", "RESULT", res);
  console.log("HMSET", "RESULT", res2);
  client.disconnect();
})();
