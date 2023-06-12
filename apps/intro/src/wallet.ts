import * as dotenv from "dotenv";
import { Wallet } from "xrpl";

dotenv.config();

// https://xrpl.org/xrp-testnet-faucet.html
const WALLET_1_SEED = process.env.WALLET_1_SEED; // Edit/create a .env file with a WALLET_1_SEED key
const WALLET_2_SEED = process.env.WALLET_2_SEED; // Edit/create a .env file with a WALLET_2_SEED key
const WALLET_3_SEED = process.env.WALLET_3_SEED; // Edit/create a .env file with a WALLET_3_SEED key
