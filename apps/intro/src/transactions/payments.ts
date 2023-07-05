import { Payment, xrpToDrops } from "xrpl"
import { convertCurrencyCodeToHex } from "../helpers"
import { TxnOptions } from "../models"
import { getXrplClient } from "../xrpl-client"

type SimplePayment = Omit<Payment, "TransactionType" | "Account">

const client = getXrplClient()

export const sendPaymentSimple = async (props: SimplePayment, { wallet }: TxnOptions) => {
  console.log("******* LET'S SEND A PAYMENT *******")
  console.log()

  // Prepare the transaction
  const transaction: Payment = {
    ...props,
    TransactionType: "Payment",
    Account: wallet.address,
  }

  // Update automatically important fields
  const prepared = await client.autofill(transaction)
  console.log("Prepared", prepared)

  // Sign the transaction with the Wallet
  const signed = wallet.sign(prepared)
  console.log("Signed", signed)

  // Submit to the Ledger and wait for validation
  const result = await client.submitAndWait(signed.tx_blob)
  console.log("Payment result", result)

  // const resultat = await client.submitAndWait(transaction, { autofill: true, wallet });
  // console.log(resultat);

  // return result;
}

export const sendPaymentAdvanced = async ({ Amount, ...rest }: Payment, { wallet }: TxnOptions) => {
  console.log("******* LET'S SEND A PAYMENT *******")
  console.log()

  // Convert the amount to drops (1 drop = .000001 XRP)
  if (typeof Amount === "string") {
    Amount = xrpToDrops(Amount)
  } else {
    Amount.currency = convertCurrencyCodeToHex(Amount.currency)
  }

  // Construct the base transaction
  const transaction: Payment = {
    ...rest,
    Account: wallet.address,
    Amount,
    TransactionType: "Payment",
  }

  // Autofill transaction with additional fields, sign and submit
  // Autofill transaction with additional fields (such as LastLedgerSequence).
  const preparedTxn = await client.autofill(transaction)

  console.log("Prepared Transaction", preparedTxn)

  // Sign the transaction
  const signedTxn = wallet.sign(preparedTxn)

  console.log("Signed Transaction", signedTxn)

  // Start calculating the time to submit and validate this transaction
  const start = performance.now()

  // Submit the transaction to the XRP Ledger and wait for it to be validated
  const response = await client.submitAndWait(signedTxn.tx_blob)

  console.log("FINAL: Validated Transaction", response)

  // Check the end time to execute this transaction
  const end = performance.now()

  console.log(`Execution time: ${end - start} ms`)
}
