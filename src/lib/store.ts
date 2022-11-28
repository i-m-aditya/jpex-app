import { getShortAddress } from '$lib/utils/utils';
import type { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { derived, writable, type Writable } from 'svelte/store';

import type Web3Modal from 'web3modal'; 

export const ethersProvider: Writable<Web3Provider> = writable(undefined);
export const address = writable('');
export const shortAddress = derived(address, ($address) => {
	if ($address === '') {
		return '';
	}
	return getShortAddress($address);
});

export const chainId = writable(undefined);
export const wethBalance = writable(undefined);

export const walletConnected = derived([address], ([$address]) => {
	if ($address === '') {
		return false;
	}
	return true;
});

export const dropdownStatus = writable(0)


export const signer: Writable<JsonRpcSigner> = writable(undefined);


export const depositAmount = writable('1');

// For switch between option buyer and seller
export const optionViewer = writable('buyer');

export const selectedStrikePrice = writable('125');

export const baycStrikePrices = writable(['125', '135']);

export const baycStrikeToPremium = writable({
	"125": "0.02",
	"135": "0.01"
})

export const openWallet = writable(false);
export const web3modalObj: Writable<Web3Modal> = writable(undefined);

export const selectedNft = writable("Bayc")

// export const userNFTs = writable({})

// export const nftContractAddress = writable("0xb74bf94049d2c01f8805b8b15db0909168cabf46")
// Temp test deployment
export const nftContractAddress = writable("0xc46B72a1f10f6773A1B64aa0390c43fe6eC3800d")
/*///////////////////////////////////////////////////////////////
            Nft Strikes               
//////////////////////////////////////////////////////////////*/
export const nftAvailableStrikes = writable({})



export const userNFTs = writable(undefined)

export const nftsLocked = writable(undefined)

// Recent option mints
export const recentMints = writable(undefined)

export const recentTxs = writable(undefined)

export const userPositions = writable(undefined)

export const isDepositForSettlementApproved = writable(0)

export const displayLongPositions = writable(true)

export const longPositions = writable(undefined)
export const shortPositions = writable(undefined)

export const currentEpoch = writable(2)

export const epochExpiry = writable('300922')

export const oraclePrice = writable('110')

export const settlementDepositApproval = writable(0)

export const baycDescription = writable("The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs living on the Ethereum blockchain. ")

export const selectedPage = writable('vault')

export const selectedSectionInVaults = writable(1)


export const isBuyerApproved = writable("0")
export const isSellerApproved = writable("0")

export const showProcessingForApprove = writable(false)
export const showProcessingForDeposit = writable(false)
export const showProcessingForNftDeposit = writable(false)

export const showProcessingForSettlementDeposit = writable(false)

export const isWethApproved = writable(false)


export const showModal = writable(false)
export const modalNumber = writable(1)

export const recentTxHash = writable(undefined)


export const selectedNftCollection = writable('Bayc')

export const rinkeByBaseUrl = writable("https://rinkeby.etherscan.io/tx/")



export const showProcessingForClaimingNFT = writable(false)
export const worldIdVerified = writable(false)


export const lock = writable(false)

export const code = writable("wagmi")
export const entered_code = writable("")