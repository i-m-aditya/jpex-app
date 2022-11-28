<script lang="ts">
	import { updateLongPosition } from '$lib/db/positions';
	import { address } from '$lib/store';
	import { getPNL, multiplyByUnit } from '$lib/utils/utils';
	import { claimEarningsForStrike } from '$lib/web3/deposit';
		
	export let position;
</script>

<div
	class=" flex items-center justify-between  py-2 px-6 bg-[#FFF4EF] font-poppins  text-black rounded-lg"
>
	<div class=" flex justify-between w-[400px]">
		<div class="text-sm flex gap-2 items-center">
			<img class=" h-8 rounded-lg" src="/bayc/bayc-3.png" alt="" />
			<p class=" font-semibold ">
				{position.option}
			</p>
		</div>

		<div class=" flex items-center text-[10px] gap-1">
			<p
				class={`font-poppins text-white rounded-2xl py-[2px] px-2 font-[350] text-sm  w-max mt-2 bg-gradient-to-tr from-[#D4D836] via-[#30B17B] to-[#67B5C6]`}
			>
				{position.action.toString().toUpperCase()}
			</p>
			<img class=" mt-2" src="/long.svg" alt="" />
		</div>
	</div>

	<div class=" grid grid-cols-6 gap-2 items-center">
		<div class="  ">
			{position.premium} WETH
		</div>
		<div class="">
			{position.quantity}
		</div>

		<!-- <div class=" text-[#FFDF6B] font-semibold">{position.strike}</div> -->
		<div class="">
			{position.oraclePrice}
		</div>

		{#if position.isEpochExpired === true}
			<div class="">
				{getPNL(position.oraclePrice, position.strike, position.quantity)}
			</div>
		{:else}
			<div class="">-</div>
		{/if}

		<div class=" ">{position.isEpochExpired === true ? 'YES' : 'NO'}</div>
		<!-- Claim Earnings / Withdraw NFT / deposit to settle -->

		<button
			class={` rounded-[100px] font-[350] p-2  text-sm transition ease-in-out delay-150 hover:scale-125 duration-300 text-white ${
				position.isClaimable === true ? ' bg-[#2A262C]' : ' bg-[#B8B8B8]'
			}`}
			on:click={async () => {
				if (position.isClaimable == true) {
					console.log('strike for claiming', position.strike);

					await claimEarningsForStrike(multiplyByUnit(position.strike, 18));

					await updateLongPosition({
						user: $address,
						status: 'INACTIVE'
					});
				} else {
					alert('Claim Earnings window has not started yet');
				}
			}}
		>
			<p>Claim Earnings</p>
		</button>
	</div>
</div>
