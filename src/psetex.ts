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
    (await client.pSetEx(
      process.env.KEY1,
      30 * 1000,
      `This is the value of ${process.env.KEY1}`
    ));
  const res2 =
    process.env.KEY2 &&
    (await client.pSetEx(
      process.env.KEY2,
      20 * 1000,
      `This is the value of ${process.env.KEY2}`
    ));
  console.log("PSETEX", "RESULT", res);
  console.log("PSETEX", "RESULT", res2);
  client.disconnect();
})();
