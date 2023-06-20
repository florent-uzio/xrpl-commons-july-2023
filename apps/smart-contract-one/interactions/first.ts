import { Web3 } from "web3";
import contract from "../artifacts/contracts/first.sol/FirstContract.json";
import { factories } from "../typechain-types";
const contractAddress = "0xB267cFfF4cF526D969617b8283529F7539c2C49A";
const contractABI = contract.abi;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8]; // Example array of numbers

const web3Provider = new Web3.providers.HttpProvider("https://rpc-evm-sidechain.xrpl.org");
const web3 = new Web3(web3Provider);
const contractInstance = new web3.eth.Contract(
  factories.firstSol.FirstContract__factory.abi,

  // contractABI,
  contractAddress
);

// contractInstance.methods
//   .calculateSum(numbers)
//   .call<unknown>()
//   .then((result) => {
//     const sum = typeof result === "bigint" ? result.toString() : result;
//     console.log("Sum:", sum);
//   })
//   .catch((error: Error) => {
//     console.error("Error:", error);
//   });

// contractInstance.methods
//   .greetOwner("Florent Uzio")
//   .call<unknown>()
//   .then((result) => {
//     // const sum = typeof result === "bigint" ? result.toString() : result;
//     console.log(result);
//   })
//   .catch((error: Error) => {
//     console.error("Error:", error);
//   });

// contractInstance.methods
//   .setMessage("This is a test")
//   .call()
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

contractInstance.methods
  .getMessage()
  .call()
  .then((result) => console.log(result))
  .catch((err) => {
    console.log(err);
  });
