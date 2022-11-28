import { ethers } from "ethers";
import "bignumber.js";
import BigNumber from "bignumber.js";
export function getShortAddress(address: string) {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
}
export function formatExpiry(expiry: string) {
  let temp: string = "";
  for (let index = 0; index < expiry.length; index++) {
    const element = expiry[index];

    if (index !== 0 && (index & 1) === 0) {
      temp += "-";
    }
    temp += expiry[index];
  }

  return temp;
}

export function getPNL(
  oraclePrice: string,
  strikePrice: string,
  quantity: Number = 1
): string {
  return (
    (Number(oraclePrice) - Number(strikePrice)) *
    Number(quantity)
  ).toFixed(2);
}

export function multiplyByUnit(amt: any, unit: any) {
  console.log("value", new BigNumber(amt).multipliedBy(10 ** unit).toFixed(0));
  
  return new BigNumber(amt.toString()).multipliedBy(10 ** unit).toFixed(0)
}

export function divideByUnit(amt: any, unit: any) {
  return new BigNumber(amt.toString()).div(10 ** unit).toString();
}
export function getOptionName(
    epoch: string,
    strike: string,
    expiry: string,
    nft: string
) {
    const option = nft + "-" + epoch + "-" + strike + "eth-" + expiry;
    console.log("Option", option);
    
    return option
}

export function getQuantity(amount: string, premium: string): Number {
    return Number(amount)/Number(premium);
}


