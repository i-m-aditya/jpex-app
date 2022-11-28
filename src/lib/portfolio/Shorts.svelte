<script lang="ts">
	import { updateShortPosition } from '$lib/db/positions';
	import {
	address,
	isDepositForSettlementApproved,showProcessingForSettlementDeposit
	} from '$lib/store';
	import { getPNL, multiplyByUnit } from '$lib/utils/utils';
	import { depositWethForSettlement,withdrawAllClaimableNFTs } from '$lib/web3/deposit';
	
	export let position;
</script>

<div
	class=" flex justify-between items-center  py-2 px-6 bg-[#FFF4EF] font-poppins  text-black rounded-lg"
>
	<!-- PFP -->
	<!-- <img class=" h-[80px] rounded-2xl" src={position.pfpUrl} alt="" /> -->
	<div class=" flex justify-between w-[350px] mr-10 ">
		<div class="text-sm flex gap-1 items-center">
			<img class=" h-8 rounded-lg" src={position.pfpUrl} alt="" />
			<p class=" font-semibold ">
				{position.option}
			</p>
		</div>

		<div class=" flex items-center text-[10px] gap-1">
			<p
				class={`font-poppins text-white rounded-2xl py-[2px] px-2 font-[350] text-sm  w-max mt-2 bg-gradient-to-tr from-[#FBAAAA] via-[#FF72F1] to-[#FE5C38] `}
			>
				{position.action.toString().toUpperCase()}
			</p>
			<img class=" mt-2" src="/short.svg" alt="" />
		</div>
	</div>
	<div class=" flex-1 grid grid-cols-6 items-center">
		<p class=" ">{position.tokenId}</p>

		<div class="">
			{position.quantity}
		</div>
		<div class=" ">
			{position.premium} WETH
		</div>

		<!-- <div class=" text-[#FFDF6B] font-semibold">{position.strike}</div> -->
		<div class="">
			{position.oraclePrice}
		</div>
		<!-- PNL -->
		<div class="  ">
			{getPNL(position.oraclePrice, position.strike)}
		</div>
		<!-- Claim Earnings / Withdraw NFT / deposit to settle -->

		{#if position.isEpochExpired === true}
			{#if position.isClaimable == true}
				<button
					class=" bg-[#2A262C] text-white rounded-[100px] p-2 font-[350] text-sm transition ease-in-out delay-150 hover:scale-125 duration-300"
					on:click={async () => {
						await withdrawAllClaimableNFTs();

						// Status update short position
						await updateShortPosition({
							user: $address,
							tokenId: position.tokenId,
							status: 'INACTIVE'
						});
					}}
				>
					CLAIM NFT
				</button>
			{:else}
				<div class=" flex flex-col">
					<!-- Show depositing processing -->
					{#if $showProcessingForSettlementDeposit === false}
						<button
							class=" bg-[#2A262C] text-white rounded-[100px] font-[350] text-xs p-2"
							on:click={async () => {
								const tx = await depositWethForSettlement(
									multiplyByUnit(position.settlementDeposit, 18)
								);
								console.log('Deposit in progress');
								isDepositForSettlementApproved.set(0);

								// db update that nft is claimable

								await updateShortPosition({
									user: $address,
									tokenId: position.tokenId,
									isClaimable: true
								});
							}}
						>
							Deposit {position.settlementDeposit} WETH
						</button>
					{:else}
						<button
							class=" bg-[#3E2681] flex justify-center p-2 rounded-[100px] cursor-pointer text-xs"
						>
							<p class=" text-white">Depositing...</p>
							<img class=" animate-spin h-6 w-6" src="/loader-1.svg" alt="" />
						</button>
					{/if}
					<p class=" text-[12px] font-poppins text-center font-[200]">For settlement</p>
				</div>
			{/if}
		{:else}
			<button class=" text-white bg-[#CBBFBA] rounded-[100px] p-2 font-[350] text-sm"
				>CLAIM NFT</button
			>
		{/if}
	</div>
</div>
