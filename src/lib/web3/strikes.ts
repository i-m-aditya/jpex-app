// import abi from '$lib/constants/abi';
// import { contractAddress } from '$lib/constants/contractAddress';
// import { ethersProvider, signer, nftAvailableStrikes } from '$lib/store';
// import { getNumBackInUnits } from '$lib/utils/units';
// import { ethers } from 'ethers';
// import { Contract, Provider } from 'ethers-multicall';
// import { get } from 'svelte/store';

// export async function getAllStrikes(nft: string) {
	

// 	/*///////////////////////////////////////////////////////////////
//                 Just making bayc work for the time being
//     //////////////////////////////////////////////////////////////*/

// 	const nobvContract = new ethers.Contract(
// 		contractAddress.NftOptionBuyersVault,
// 		abi.nftOptionBuyerVault,
// 		get(signer)
// 	);

// 	const epochStrikes = await nobvContract.getEpochStrikes();

// 	const strikeList = [];
// 	epochStrikes.forEach((strike) => {
// 		strikeList.push(getNumBackInUnits(strike, 18));
// 	});

// 	const strikes = get(nftAvailableStrikes);
// 	strikes[nft] = strikeList;

//     nftAvailableStrikes.set(strikes);

//     console.log("NFT AS", get(nftAvailableStrikes));
    
// }
