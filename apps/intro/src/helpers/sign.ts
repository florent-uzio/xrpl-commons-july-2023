import { Transaction } from "xrpl"
import { TxnOptions } from "../models"
import { getXrplClient } from "../xrpl-client"

const client = getXrplClient()

export const signTransaction = async (
  txn: Transaction,
  { wallet, multiSign }: TxnOptions,
  signers: number
) => {
  console.log("******* LET'S SIGN A TRANSACTION *******")
  console.log()

  const prepared = await client.autofill(txn, signers)

  const signed = wallet.sign(prepared, multiSign)

  console.log(signed)
  return signed
}
