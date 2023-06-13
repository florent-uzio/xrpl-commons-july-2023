import { acceptNftOffer } from "./transactions";
import { WALLET_2 } from "./wallet";
import { getXrplClient } from "./xrpl-client";

const client = getXrplClient();

const main = async () => {
  await client.connect();

  await client.fundWallet(WALLET_2);

  //   await sendPaymentSimple(
  //     { Destination: WALLET_2.address, Amount: xrpToDrops(20) },
  //     { wallet: WALLET_1 }
  //   );

  //   await mintNft(
  //     {
  //       URI: "https://media.giphy.com/media/EYJidsvKRt9a8/giphy.gif",
  //       NFTokenTaxon: 0,
  //     },
  //     { wallet: WALLET_1 }
  //   );

  //   await createNftOffer(
  //     {
  //       Flags: NFTokenCreateOfferFlags.tfSellNFToken,
  //       NFTokenID: "00080000336B93F98530EE29346D545777E44CC34FE045DA0000099B00000000",
  //       Amount: "100",
  //     },
  //     { wallet: WALLET_1 }
  //   );

  await acceptNftOffer(
    { NFTokenSellOffer: "16BD0F642DD356DFE735371A24AC3CAB1CBBFB3D43BCAA170A8C7015A00D901F" },
    { wallet: WALLET_2 }
  );

  await client.disconnect();
};

main();
