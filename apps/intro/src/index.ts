import { xrpToDrops } from "xrpl";
import { sendPaymentSimple } from "./transactions";
import { WALLET_1, WALLET_2 } from "./wallet";
import { getXrplClient } from "./xrpl-client";

const client = getXrplClient();

const main = async () => {
  await client.connect();

  await sendPaymentSimple(
    { Destination: WALLET_2.address, Amount: xrpToDrops(20) },
    { wallet: WALLET_1 }
  );

  await client.disconnect();
};

main();
