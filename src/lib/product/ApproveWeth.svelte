<script lang="ts">
	import { contractAddress } from '$lib/constants/contractAddress';
	import { tokenToTokenAddress } from '$lib/constants/token';
	import { isWethApproved,showProcessingForApprove } from '$lib/store';
	import { approveERC20 } from '$lib/web3/approve';
</script>

<div class=" flex flex-col bg-[#F4F0FF] rounded-lg items-center py-4 px-8 font-poppins mt-6">
	<div class=" bg-white py-4 px-6 rounded-xl ring-2">
		<img class=" h-14" src="/eth1.svg" alt="" />
	</div>
	<p class=" text-center mt-3">
		Before you deposit, the vault needs your permission to invest your WETH in the vault’s strategy.
	</p>
</div>

{#if $showProcessingForApprove === false}
	<button
		class=" premium-bg flex justify-center p-2 rounded-lg mt-3 cursor-pointer w-full"
		on:click={async () => {
			const wethAddress = tokenToTokenAddress["WETH"]

			// Approve for buyers vault
			let tx = await approveERC20(wethAddress, contractAddress.NftOptionBuyersVault);
			showProcessingForApprove.set(true);
			let res = await tx.wait();

			// Approve for sellers vault
			tx = await approveERC20(wethAddress, contractAddress.NftOptionSellersVault);
			showProcessingForApprove.set(true);
			res = await tx.wait();
			console.log('Response', res);
			if (res.status === 1) {
				isWethApproved.set(true);
				showProcessingForApprove.set(false);
			}
		}}
	>
		<p class=" text-white ">Approve WETH</p>
	</button>
{:else}
	<button class=" bg-[#3E2681] flex justify-center p-2 rounded-lg mt-3 cursor-pointer w-full">
		<p class=" font-medium text-lg text-white">Approving WETH...</p>
		<img class=" animate-spin h-6 w-6" src="/loader-1.svg" alt="" />
	</button>
{/if}

<div class=" font-light mt-6 flex justify-center">
	<p>Why do we have to do this? <span class=" font-medium text-blue-400">Learn here</span></p>
</div>

<!-- divider -->
<div class=" bg-[#DDDBE0] h-[1px] mt-6" />

<div class=" flex justify-between mt-6 font-extralight text-base">
	<p>Help</p>
	<p>Contract Address: <span class=" font-semibold text-blue-600">0x345...b45h</span></p>
</div>

<style>
	.premium-bg {
		background: linear-gradient(72.88deg, #aacafb -4.23%, #fe90d9 52.37%, #febd38 97.09%);
	}
</style>
