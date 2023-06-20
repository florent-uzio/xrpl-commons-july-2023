import { ethers } from "hardhat";

import { FirstContract__factory } from "../typechain-types";

// Update after each deployment
const contractAddress = "0xDF9dC0ad0409Fd8871FC0Cf71499217511A857B4";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8]; // Example array of numbers

const URL_RPC = "https://rpc-evm-poa-sidechain.peersyst.tech";

async function interactWithContract() {
  const provider = new ethers.JsonRpcProvider(URL_RPC);
  const signer = await provider.getSigner();

  // Access the contract factory using the generated typings
  const contractFactory = FirstContract__factory.connect(contractAddress, signer);

  const message = await contractFactory.getMessage();
  const calc = await contractFactory.calculateSum(numbers);

  console.log({ message, calc: Number(calc) });
}

interactWithContract();
