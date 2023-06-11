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
    (await client.lSet(process.env.KEY1, 1, `This is the value of index 1`));
  const res2 =
    process.env.KEY2 &&
    (await client.lSet(process.env.KEY2, 1, `This is the value of index 1`));
  console.log("LSET", "RESULT", res);
  console.log("LSET", "RESULT", res2);
  client.disconnect();
})();
