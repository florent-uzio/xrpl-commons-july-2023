import * as dotenv from "dotenv";
import { Wallet } from "xrpl";

dotenv.config();

// https://xrpl.org/xrp-testnet-faucet.html
const WALLET_1_SEED = process.env.WALLET_1_SEED ?? ""; // Edit/create a .env file with a WALLET_1_SEED key
const WALLET_2_SEED = process.env.WALLET_2_SEED ?? ""; // Edit/create a .env file with a WALLET_2_SEED key

export const WALLET_1 = Wallet.fromSeed(WALLET_1_SEED);
export const WALLET_2 = Wallet.fromSeed(WALLET_2_SEED);
