import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import { GemWalletProvider } from "./shared/contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <GemWalletProvider>
        <App />
      </GemWalletProvider>
    </ChakraProvider>
  </React.StrictMode>
);
