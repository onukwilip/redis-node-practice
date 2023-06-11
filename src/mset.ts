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
    process.env.KEY5 &&
    (await client.mSet([
      process.env.KEY4,
      `This is the value of ${process.env.KEY4}`,
      process.env.KEY5,
      `This is the value of ${process.env.KEY5}`,
    ]));
  console.log("MSET", "RESULT", res);
  client.disconnect();
})();
