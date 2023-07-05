import { multisign } from "xrpl"
import { getXrplClient } from "../xrpl-client"

const client = getXrplClient()

export const sendPaymentMultisign = async (signatures: string[]) => {
  const multiSign = multisign(signatures)

  // Submit the transaction to the XRP Ledger and wait for it to be validated
  const response = await client.submit(multiSign)

  console.log(response)
  return response
}
