import abi from '$lib/constants/abi';
import { tokenIdToPfp } from '$lib/constants/tokenIds';
import { Contract, Provider } from 'ethers-multicall';



// export async function getNftHoldingsForAddress(address, nftContractAddress, ethersProvider) {
// 	const erc721 = new Contract(nftContractAddress, abi.erc721);
// 	const provider = new Provider(ethersProvider);
// 	await provider.init();

// 	// console.log("Erc721", erc721);

// 	// const totalSupply = await erc721.ownerOf(1);

// 	// const calls = []

// 	// calls.push(erc721.ownerOf(1))

// 	// const results = await provider.all(calls)

// 	// const owner = results.shift()
// 	// console.log(owner);

// 	// console.log("Total Supply", totalSupply);

// 	// const totalSupply = await erc721.totalSupply()
// 	// console.log("totalSupply: ", totalSupply.toString());
// 	// const tokens = []

// 	const calls = [];
// 	const tokens = [];
// 	console.log('Sta');

// 	for (let tokenId = 1; tokenId < 999; tokenId++) {
// 		calls.push(erc721.ownerOf(tokenId));
// 	}

// 	const results = await provider.all(calls);
// 	for (let tokenId = 1; tokenId < 999; tokenId++) {
// 		const realOwner = results.shift();
		

// 		if (
// 			realOwner !== undefined &&
// 			realOwner.toString().toLowerCase() == address.toString().toLowerCase()
// 		) {
// 			// TODO remove this hack
// 			let imgId = Math.floor(Math.random() * 2);
// 			tokens.push({
// 				img: baycJpegs[imgId],
// 				tokenId: tokenId
// 			});
			
// 		}
// 	}

// 	return {
// 		"bayc": tokens
// 	}
// 	// userNFTs.set(temp);

// }

// --------------------------------------
// export async function getNftHoldingsForAddress(address, nftContractAddress, ethersProvider) {
// 	const erc721 = new ethers.Contract("0xa5bb401e53a3de5445102dfee26ae2a1d2669d23", abi.erc721, ethersProvider);
// 	// const provider = new Provider(ethersProvider);
// 	// await provider.init();

// 	// console.log("Erc721", erc721);

// 	console.log("Fetching ....");
	
// 	const owner = await erc721.ownerOf(8);
// 	console.log("Owner of one", owner);
	

// 	// const calls = []

// 	// calls.push(erc721.ownerOf(1))

// 	// const results = await provider.all(calls)

// 	// const owner = results.shift()
// 	// console.log(owner);

// 	// console.log("Total Supply", totalSupply);

// 	// const totalSupply = await erc721.totalSupply()
// 	// console.log("totalSupply: ", totalSupply.toString());
// 	// const tokens = []

// 	// const calls = [];
// 	// const tokens = [];
// 	// console.log('Sta');

// 	// for (let tokenId = 1; tokenId < 999; tokenId++) {
// 	// 	calls.push(erc721.ownerOf(tokenId));
// 	// }

// 	// const results = await provider.all(calls);
// 	// for (let tokenId = 1; tokenId < 999; tokenId++) {
// 	// 	const realOwner = results.shift();
		

// 	// 	if (
// 	// 		realOwner !== undefined &&
// 	// 		realOwner.toString().toLowerCase() == address.toString().toLowerCase()
// 	// 	) {
// 	// 		// TODO remove this hack
// 	// 		let imgId = Math.floor(Math.random() * 2);
// 	// 		tokens.push({
// 	// 			img: baycJpegs[imgId],
// 	// 			tokenId: tokenId
// 	// 		});
			
// 	// 	}
// 	// }

// 	// return {
// 	// 	"bayc": tokens
// 	// }
// 	// userNFTs.set(temp);

// }




// --------------------------------------
export async function getNftHoldingsForAddress(address, nftContractAddress, ethersProvider) {
	const erc721 = new Contract(nftContractAddress, abi.erc721);
	const provider = new Provider(ethersProvider);
	await provider.init();
	
	const calls = [];
	const tokens = [];
	console.log('Sta');

	for (let tokenId = 0; tokenId < 10; tokenId++) {
		calls.push(erc721.ownerOf(tokenId));
	}

	const results = await provider.all(calls);
	for (let tokenId = 0; tokenId < 10; tokenId++) {
		const realOwner = results.shift();
		

		if (
			realOwner !== undefined &&
			realOwner.toString().toLowerCase() == address.toString().toLowerCase()
		) {
			tokens.push({
				img: tokenIdToPfp[tokenId],
				tokenId: tokenId.toString()
			});
			
		}
	}

	return {
		"bayc": tokens
	}

}