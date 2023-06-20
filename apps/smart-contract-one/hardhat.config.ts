import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenvConfig();

const PRIVATE_ACCOUNT_KEY = process.env.PRIVATE_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    evmv1: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      chainId: 1440001,
      accounts: [PRIVATE_ACCOUNT_KEY],
    },
    evmv2: {
      url: "https://rpc-evm-poa-sidechain.peersyst.tech",
      chainId: 1440002,
      accounts: [PRIVATE_ACCOUNT_KEY],
    },
  },
};

export default config;
