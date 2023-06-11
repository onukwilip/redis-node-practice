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
    (await client.setEx(
      process.env.KEY1,
      30,
      `This is the value of ${process.env.KEY1}`
    ));
  const res2 =
    process.env.KEY2 &&
    (await client.setEx(
      process.env.KEY2,
      20,
      `This is the value of ${process.env.KEY2}`
    ));
  console.log("SETEX", "RESULT", res);
  console.log("SETEX", "RESULT", res2);
  client.disconnect();
})();
