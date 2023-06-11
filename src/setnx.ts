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
    (await client.setNX(
      process.env.KEY1,
      `This is the value of ${process.env.KEY1}`
    ));
  const res2 =
    process.env.KEY3 &&
    (await client.setNX(
      process.env.KEY3,
      `This is the value of ${process.env.KEY3}`
    ));
  console.log("SET", "RESULT", res);
  console.log("SET", "RESULT", res2);
  client.disconnect();
})();
