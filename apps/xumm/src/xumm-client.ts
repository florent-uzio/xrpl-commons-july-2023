import * as dotenv from "dotenv"
import { XummSdk } from "xumm-sdk"

dotenv.config()

let xummClient: XummSdk

// Initialize the client if it doesn't exist or return it.
export const getXummClient = () => {
  if (!xummClient) {
    xummClient = new XummSdk(process.env.API_KEY, process.env.API_SECRET)
    return xummClient
  }
  return xummClient
}
