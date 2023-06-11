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
    process.env.KEY1 && (await client.hExists(process.env.KEY1, "first"));
  const res2 =
    process.env.KEY2 && (await client.hExists(process.env.KEY2, "first"));
  console.log("HEXISTS", "RESULT", res);
  console.log("HEXISTS", "RESULT", res2);
  client.disconnect();
})();
