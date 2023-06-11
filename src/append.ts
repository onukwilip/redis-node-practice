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
    (await client.append(process.env.KEY1, ". This is appended"));
  const res2 =
    process.env.KEY2 &&
    (await client.append(process.env.KEY2, ". This is appended"));
  console.log("APPEND", "RESULT", res);
  console.log("APPEND", "RESULT", res2);
  client.disconnect();
})();
