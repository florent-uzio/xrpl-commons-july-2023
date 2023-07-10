import { XummJsonTransaction } from "xumm-sdk/dist/src/types"
import { getXummClient } from "./xumm-client"

// const client = getClient()

const xummClient = getXummClient()

// This is a function for xrpl.js
// const main = async () => {
//   await client.connect()

//   await sendPayment(
//     {
//       Destination: WALLET_2.address,
//       Amount: "10000000",
//     },
//     { wallet: WALLET_1 }
//   )

//   // await mintNft(
//   //   {
//   //     URI: "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif",
//   //     NFTokenTaxon: 0,
//   //   },
//   //   { wallet: WALLET_1 }
//   // )

//   // await createNftOffer(
//   //   {
//   //     Flags: NFTokenCreateOfferFlags.tfSellNFToken,
//   //     NFTokenID: "000800009E383C2FF1E1B6D51BA3A0976DCD7973FC7198260000099B00000000",
//   //     Amount: "100000000",
//   //   },
//   //   { wallet: WALLET_1 }
//   // )

//   // await acceptNftOffer(
//   //   {
//   //     NFTokenSellOffer: "E2ECA71AD6C50FA6FF733D86338498B57174D3976AF8DFEE422A83E5D834616B",
//   //   },
//   //   { wallet: WALLET_2 }
//   // )

//   await client.disconnect()
// }

// This is a function for XUMM
export const main2 = async () => {
  // const ping = await xummClient.ping()

  const payload: XummJsonTransaction = {
    TransactionType: "Payment",
    // rhA3HKbeYSSgMt7USx27G5RpJVpghy3saP
    Destination: "rBoMrBMRVpGoZcWPieyirZqCNg4asvFLYw",
  }

  const response = await xummClient.payload.create(payload)

  console.log(response)
}

main2()
