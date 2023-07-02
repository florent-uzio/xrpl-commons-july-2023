import { Container, Heading } from "@chakra-ui/react";
import { Example } from "./components";

function App() {
  return (
    <Container minW="800">
      <Heading py="10" as="h1" size="2xl" textAlign="center">
        Hello GemWallet!
      </Heading>

      {/* Insert your components here to interact with GemWallet */}
      <Example />
    </Container>
  );
}

export default App;
