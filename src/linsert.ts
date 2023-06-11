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
    (await client.lInsert(
      process.env.KEY1,
      "BEFORE",
      `First value`,
      `Initial value`
    ));
  const res2 =
    process.env.KEY2 &&
    (await client.lInsert(
      process.env.KEY2,
      "AFTER",
      `First value`,
      `Second value`
    ));
  console.log("LINSERT", "RESULT", res);
  console.log("LINSERT", "RESULT", res2);
  client.disconnect();
})();
