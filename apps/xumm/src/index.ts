import { basicPayload } from "./payloads"
import { getXummClient } from "./xumm-client"

const main = async () => {
  const xummClient = getXummClient()

  const payload = await xummClient.payload.create(basicPayload, true)
  console.log(payload)
}

main()
