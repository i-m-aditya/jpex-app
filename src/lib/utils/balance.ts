import tokenAddress from "$lib/constants/address";
import { signer, address as adr, wethBalance } from "$lib/store";
import { ethers } from "ethers";
import { get } from "svelte/store";
import abi from "../constants/abi";
import { divideByUnit } from "./utils";


export async function setWethBalance() {
    const erc20 = new ethers.Contract(tokenAddress["WETH"], abi.erc20, get(signer));
    const balanceInUnits = await erc20.balanceOf(get(adr));
    
    wethBalance.set(divideByUnit(balanceInUnits, 18));
}