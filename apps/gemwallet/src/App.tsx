import { Container, Heading, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { CreateNftOffer, Example, MintNft, SendPayment } from "./components"

enum Action {
  Example = "EXAMPLE",
  SendPayment = "SEND_PAYMENT",
  MintNft = "MINT_NFT",
  CreateNftOffer = "CREATE_NFT_OFFER",
}

function App() {
  const [action, setAction] = useState<Action>(Action.Example)

  const getComponent = () => {
    switch (action) {
      case Action.Example:
        return <Example />
      case Action.SendPayment:
        return <SendPayment />
      case Action.MintNft:
        return <MintNft />
      case Action.CreateNftOffer:
        return <CreateNftOffer />
      default:
        return <Example />
    }
  }

  return (
    <Container minW="800">
      <Stack spacing="6">
        <Heading py="10" as="h1" size="2xl" textAlign="center">
          Hello GemWallet!
        </Heading>

        <Text>Select what action to execute with GemWallet</Text>
        <Select
          value={action}
          placeholder="Select Action"
          onChange={(e) => setAction(e.target.value as Action)}
        >
          <option value={Action.Example}>Example</option>
          <option value={Action.SendPayment}>Send Payment</option>
          <option value={Action.MintNft}>Mint NFT</option>
          <option value={Action.CreateNftOffer}>Create NFT Offer</option>
        </Select>

        {getComponent()}
      </Stack>
    </Container>
  )
}

export default App
