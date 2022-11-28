<script lang="ts">
	import {
	baycStrikeToPremium,depositAmount,modalNumber,selectedStrikePrice,
	showModal,
    wethBalance
	} from '$lib/store';
	import StrikeDropdown from './StrikeDropdown.svelte';
		function clickedMax() {
		const wethBal = $wethBalance;
		depositAmount.set(wethBal);
	}
</script>

<div class=" flex flex-row justify-between mt-4 text-[14px] font-poppins  ">
	<p>Select Strike Price</p>
	<p>Amount</p>
	<p class="text-[#898A97]">
		Balance: <span class=" font-semibold text-black"
			>{$wethBalance != undefined ? $wethBalance : '0'} WETH</span
		>
	</p>
</div>
<div class=" flex flex-row mt-3">
	<StrikeDropdown />
	<div
		class=" ml-1 flex-1 flex flex-row border px-2 rounded-lg  font-poppins justify-between items-center"
	>
		<input
			class=" w-2/3 text-left outline-none border-transparent focus:border-transparent focus:ring-0"
			type="text"
			placeholder="0"
			bind:value={$depositAmount}
		/>
		<div class=" bg-gray-100 rounded-lg p-1">
			<p on:click={clickedMax} class=" text-[10px] cursor-pointer">MAX</p>
		</div>
		<div class=" border rounded p-1">
			<img class=" h-4" src="/eth.png" alt="" />
		</div>
	</div>
	<div />
</div>

<!--  Display premium-->
<div class=" bg-[#F4F9FE] flex justify-center p-2 rounded-lg mt-3">
	<p class="  font-poppins text-[14px] font-light text-[#AF83B7]">
		Premium: {$baycStrikeToPremium[$selectedStrikePrice]}
		<span class=" font-medium">WETH</span>
	</p>
</div>
<!-- Preview Deposit -->

<button
	class=" premium-bg flex justify-center p-2 rounded-lg mt-3 cursor-pointer w-full"
	on:click={() => {

		modalNumber.set(0)
		showModal.set(true)
		// const tx = await depositInOptionBuyersVault($depositAmount, $selectedStrikePrice);
		// const res = await tx.wait();

		// const position = {
		// 	user: $address,
		// 	nft: 'bayc',
		// 	option: getOptionName($currentEpoch.toString(), $selectedStrikePrice, $epochExpiry, 'bayc'),
		// 	quantity: getQuantity($depositAmount, $baycStrikeToPremium[$selectedStrikePrice]),
		// 	epoch: $currentEpoch,
		// 	status: 'ACTIVE',
		// 	action: 'Long',
		// 	strike: $selectedStrikePrice,
		// 	oraclePrice: $oraclePrice,
		// 	expiry: $epochExpiry,
		// 	premium: $baycStrikeToPremium[$selectedStrikePrice],
		// 	isEpochExpired: false,
		// 	isClaimable: false,
		// 	earnings: 0,
		// 	txUrl:
		// 		'https://rinkeby.etherscan.io/tx/0x7edd96c496e7dab9b5dfc12e025ed170fb8954c21f9fb8fa7cf43b4f87c1ea05'
		// };
		// await saveNewLongPosition(position);
		// console.log('Saved new position');
	}}
>
	<p class=" text-white ">Preview Deposit</p>
</button>

<style>
	.premium-bg {
		background: linear-gradient(72.88deg, #aacafb -4.23%, #fe90d9 52.37%, #febd38 97.09%);
	}
</style>
