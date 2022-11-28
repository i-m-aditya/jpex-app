import abi from "$lib/constants/abi";
import { contractAddress } from "$lib/constants/contractAddress";
import { signer, selectedNft, selectedStrikePrice } from "$lib/store";
import { multiplyByUnit } from "$lib/utils/utils";
import { ethers } from "ethers";
import { get } from "svelte/store";

export async function depositNftInOptionSellerVault() {
  const optionSellerContract = new ethers.Contract(
    contractAddress.NftOptionSellersVault,
    abi.nftOptionSellerVault,
    get(signer)
  );
  console.log("Hello");
  console.log(get(selectedNft));
  console.log(get(selectedStrikePrice));

  let gasLimit = await optionSellerContract.estimateGas.depositNftAndMintOption(
    get(selectedNft),
    multiplyByUnit(get(selectedStrikePrice), 18)
  );
  gasLimit = gasLimit.mul(4).div(3);

  console.log("Gas limit", gasLimit);
  

  const tx = await optionSellerContract.depositNftAndMintOption(
    get(selectedNft),
    multiplyByUnit(get(selectedStrikePrice), 18)
  );

  console.log("Tx deposit nft", tx);
  return tx;
}
