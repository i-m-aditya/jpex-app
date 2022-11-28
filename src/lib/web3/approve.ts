import abi from "$lib/constants/abi";
import { signer } from "$lib/store";
import { ethers } from "ethers";
import { get } from "svelte/store";

export async function approveERC20(
  tokenAddress: string,
  addressToApprove: string
) {
  const amtBig =
    "123456789123456789123456789123456789123456789123456789123456789123456789";
  const erc20 = new ethers.Contract(tokenAddress, abi.erc20, get(signer));

  let gasLimit = await erc20.estimateGas.approve(addressToApprove, amtBig);
  gasLimit = gasLimit.mul(4).div(3);
  console.log("Approve gas limit", gasLimit);

  const tx = await erc20.approve(addressToApprove, amtBig, { gasLimit });
  return tx;
}

export async function approveERC721(
  nftContractAddress: string,
  addressToApprove: string,
  tokenId: string
) {
  const erc721 = new ethers.Contract(
    nftContractAddress,
    abi.erc721,
    get(signer)
  );

  let gasLimit = await erc721.estimateGas.approve(addressToApprove, tokenId);
  gasLimit = gasLimit.mul(4).div(3);
  console.log("Approve gas limit", gasLimit);
  const tx = await erc721.approve(addressToApprove, tokenId, { gasLimit });
  return tx;
}
