import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./theme/global/styles.css";
import theme from "./theme";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";

import {
  flare,
  songbird,
  songbirdTestnet
} from "wagmi/chains";

import { Home } from "./pages/home";

const chains = [
  flare,
  songbird,
  songbirdTestnet
];
const projectId = "5f53b0299462693daec37a2c802d477a";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export const App = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <Home />
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </ChakraProvider>
    </Router>
  );
};
