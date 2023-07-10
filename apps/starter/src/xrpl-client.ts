import { Client } from "xrpl"

const networks = {
  RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233",
}

let client: Client

// Function to get the client
export const getClient = () => {
  // If first time running the application
  if (!client) {
    // Instantiate new Client
    client = new Client(networks.RIPPLE_TESTNET)
  }

  // Otherwise return existing object
  return client
}
