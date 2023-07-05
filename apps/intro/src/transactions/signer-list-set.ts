import { SignerListSet } from "xrpl"
import { TxnOptions } from "../models"
import { getXrplClient } from "../xrpl-client"

const client = getXrplClient()

type SignerListSetProps = Omit<SignerListSet, "TransactionType" | "Account">

export const setSigners = async (props: SignerListSetProps, { wallet }: TxnOptions) => {
  console.log("******* LET'S SET SIGNERS *******")
  console.log()

  // Prepare the transaction
  const transaction: SignerListSet = {
    ...props,
    TransactionType: "SignerListSet",
    Account: wallet.address,
  }

  // Autofill transaction with additional fields, sign and submit
  const result = await client.submitAndWait(transaction, { autofill: true, wallet })

  console.log("Result SignerListSet", result)
  return result
}
