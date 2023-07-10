import {
  NFTokenAcceptOffer,
  NFTokenCreateOffer,
  NFTokenMint,
  NFTokenMintFlags,
  convertStringToHex,
} from "xrpl"
import { TxnOptions } from "../models"
import { getClient } from "../xrpl-client"

const client = getClient()

type MintNftProps = Omit<NFTokenMint, "TransactionType" | "Account" | "Flags">

export const mintNft = async ({ URI, ...rest }: MintNftProps, { wallet }: TxnOptions) => {
  // Prepare
  const nftMintTxn: NFTokenMint = {
    ...rest,
    Flags: NFTokenMintFlags.tfTransferable,
    URI: convertStringToHex(URI ?? ""),
    Account: wallet.address,
    TransactionType: "NFTokenMint",
  }

  const prepared = await client.autofill(nftMintTxn)

  // Sign
  const signed = wallet.sign(prepared)

  // Submit and wait
  const response = await client.submitAndWait(signed.tx_blob)
  console.log(response)

  return response
}

type CreateNftOfferProps = Omit<NFTokenCreateOffer, "TransactionType" | "Account">

export const createNftOffer = async (props: CreateNftOfferProps, { wallet }: TxnOptions) => {
  // Prepare
  const offerTxn: NFTokenCreateOffer = {
    ...props,
    Account: wallet.address,
    TransactionType: "NFTokenCreateOffer",
  }

  // Joining autofill, sign and submit wait
  const result = await client.submitAndWait(offerTxn, {
    autofill: true,
    wallet,
  })

  console.log(result)
  return result
}

type AcceptNftOfferProps = Omit<NFTokenAcceptOffer, "TransactionType" | "Account">

export const acceptNftOffer = async (props: AcceptNftOfferProps, { wallet }: TxnOptions) => {
  // Prepare
  const acceptTxn: NFTokenAcceptOffer = {
    ...props,
    TransactionType: "NFTokenAcceptOffer",
    Account: wallet.address,
  }

  // Autofill, Sign and submit wait
  const result = await client.submitAndWait(acceptTxn, {
    autofill: true,
    wallet,
  })

  console.log(result)
  return result
}
