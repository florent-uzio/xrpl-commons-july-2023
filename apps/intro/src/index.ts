import { getXrplClient } from "./xrpl-client"

const client = getXrplClient()

const main = async () => {
  await client.connect()

  // await client.fundWallet(WALLET_2);

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

  //   await acceptNftOffer(
  //     { NFTokenSellOffer: "16BD0F642DD356DFE735371A24AC3CAB1CBBFB3D43BCAA170A8C7015A00D901F" },
  //     { wallet: WALLET_2 }
  //   );

  /**
   * Multi Signing
   */

  // await setSigners(
  //   {
  //     SignerEntries: [
  //       {
  //         SignerEntry: {
  //           Account: WALLET_2.address,
  //           SignerWeight: 1,
  //         },
  //       },
  //       {
  //         SignerEntry: {
  //           Account: WALLET_3.address,
  //           SignerWeight: 1,
  //         },
  //       },
  //     ],
  //     SignerQuorum: 2,
  //   },
  //   { wallet: WALLET_1 }
  // )

  // const payment: Payment = {
  //   TransactionType: "Payment",
  //   Account: WALLET_1.address,
  //   Destination: WALLET_4.address,
  //   Amount: "1000000",
  // }

  // const signature1 = await signTransaction(payment, { wallet: WALLET_2, multiSign: true }, 2)
  // const signature2 = await signTransaction(payment, { wallet: WALLET_3, multiSign: true }, 2)

  // await sendPaymentMultisign([signature1.tx_blob, signature2.tx_blob])

  await client.disconnect()
}

main()
