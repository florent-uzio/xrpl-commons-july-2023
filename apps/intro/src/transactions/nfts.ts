import {
  NFTokenAcceptOffer,
  NFTokenCreateOffer,
  NFTokenCreateOfferFlags,
  NFTokenMint,
  NFTokenMintFlags,
  convertStringToHex,
  xrpToDrops,
} from "xrpl"
import { TxnOptions } from "../models"
import { getXrplClient } from "../xrpl-client"

type MintNftProps = Omit<NFTokenMint, "TransactionType" | "Account">

const client = getXrplClient()

export const mintNft = async ({ URI, Flags, ...rest }: MintNftProps, { wallet }: TxnOptions) => {
  console.log("******* LET'S MINT AN NFT *******")
  console.log()

  // Construct the base transaction
  const transaction: NFTokenMint = {
    TransactionType: "NFTokenMint",
    Account: wallet.address,
    Flags: Flags ?? NFTokenMintFlags.tfTransferable,
    URI: URI ? convertStringToHex(URI) : "",
    ...rest,
  }

  // Autofill transaction with additional fields, sign and submit
  const result = await client.submitAndWait(transaction, { autofill: true, wallet })

  console.log("Result Mint NFT", result)
  return result
}

/**
 * ************************************
 */

type CreateNftOfferProps = Omit<NFTokenCreateOffer, "TransactionType" | "Account"> &
  (
    | { Flags: NFTokenCreateOfferFlags.tfSellNFToken; Owner?: never }
    | { Flags?: undefined; Owner: string }
  )

export const createNftOffer = async (
  { Amount, ...rest }: CreateNftOfferProps,
  { wallet }: TxnOptions
) => {
  console.log("******* LET'S CREATE AN NFT OFFER *******")
  console.log()

  // Convert the amount to drops (1 drop = .000001 XRP)
  if (typeof Amount === "string") {
    Amount = xrpToDrops(Amount)
  }

  // Construct the base transaction
  const transaction: NFTokenCreateOffer = {
    Account: wallet.address,
    Amount,
    TransactionType: "NFTokenCreateOffer",
    ...rest,
  }

  // Autofill transaction with additional fields, sign and submit
  const result = await client.submitAndWait(transaction, { autofill: true, wallet })

  console.log("Result Create NFT Offer", result)
  return result
}

/**
 * ************************************
 */

type AcceptNftOfferProps = Omit<NFTokenAcceptOffer, "TransactionType" | "Account">

export const acceptNftOffer = async (props: AcceptNftOfferProps, { wallet }: TxnOptions) => {
  console.log("******* LET'S ACCEPT AN NFT OFFER *******")
  console.log()

  // Construct the base transaction
  const transaction: NFTokenAcceptOffer = {
    Account: wallet.address,
    TransactionType: "NFTokenAcceptOffer",
    ...props,
  }

  // Autofill transaction with additional fields, sign and submit
  const result = await client.submitAndWait(transaction, { autofill: true, wallet })

  console.log("Result Accept NFT Offer", result)
  return result
}
