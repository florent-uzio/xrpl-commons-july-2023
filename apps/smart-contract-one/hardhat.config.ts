import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenvConfig();

const PRIVATE_ACCOUNT_KEY = process.env.PRIVATE_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    xrplOld: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      chainId: 1440001,
      accounts: [PRIVATE_ACCOUNT_KEY],
    },
    xrpl: {
      url: "https://witness-evm-sidechain.peersyst.tech",
      chainId: 1440002,
      accounts: [PRIVATE_ACCOUNT_KEY],
    },
  },
};

export default config;
