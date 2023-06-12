import { getXrplClient } from "./xrpl-client";

const client = getXrplClient();

const main = async () => {
  await client.connect();

  await client.disconnect();
};

main();
