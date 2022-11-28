import ck from "$lib/constants/ck";
import { contractAddress } from "$lib/constants/contractAddress";
import { signer } from "$lib/store";
import { multiplyByUnit } from "$lib/utils/utils";
import { ethers } from "ethers";
import { Contract, Provider } from "ethers-multicall";
import { get } from "svelte/store";

const infuraKey = "7b6e08e0772b4c93a860cf2d40f8b400";
const provider = new ethers.providers.InfuraProvider("mainnet", infuraKey);

// export async function getAllPregnantKitties() {
//   console.log("Hello");

//   const ethcallProvider = new Provider(provider);
//   await ethcallProvider.init();

//   try {
//     const ckContract = new Contract(
//       "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
//       ck.abi
//     );

//     const callList = [];

//     for (let i = 100; i < 101; i++) {
//       callList.push(ckContract.isPregnant(i));
//     }

//     console.log("About ot call");

//     const response = await ethcallProvider.all(callList);
//     // let isShe;
//     // for(let i=0; i<1000; i++) {
//     //     isShe = response
//     // }
//     console.log("Hey guys");

//     console.log(response);
//   } catch (err) {
//     console.log("Error is", err);
//   }
// }

export async function getAllPregnantKitties() {
  console.log("Hello");

  try {
    const ckContract = new ethers.Contract(
      "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
      ck.abi,
      provider
    );

    let pregnantList = []

    for (let index = 200000; index < 100000; index--) {
      const isShePregnant = await ckContract.isPregnant(index);
        if(isShePregnant) {
            pregnantList.push(index);
            console.log(`${index} is pregnant`);
            
        }

        
    }
  } catch (err) {
    console.log("Error is", err);
  }
}
