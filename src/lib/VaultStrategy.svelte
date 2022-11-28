<script>
import { tokenIdToPfp } from "./constants/tokenIds";


import { selectedNftCollection } from "./store";

</script>
<div class=" flex flex-col gap-3 w-full items-start">
	<!-- Vault strategy -->

	<div>Vault Strategy</div>

	<!-- Vault description -->
	<div>
		Doodles-C-WETH earns yield on its WETH deposits by running a weekly Doodles call-selling
		strategy, where the call options are collateralised by the NFT itself.
	</div>

	<!-- Explainer -->

	<div class=" flex justify-center">
		<!-- Left -->
		<div class=" w-1/3">
			<div>Vault Receive WETH Deposits</div>
			<div>
				The vault receives WETH from depositors(option buyers) and invests 100% of its WETH balance
				into options seller vault.
			</div>

			<!-- Divider -->
			<div />
		</div>

		<!-- right -->
		<div>
			<div
				class={` rounded-lg mr-2 p-2 flex flex-col items-center
						 border border-[#EEC1FF]`}
			>
				<img class=" rounded-lg object-contain  h-[100px]" src={tokenIdToPfp[1]} alt="" />
				<div class=" w-[100px] h-0 bg-transparent" />
				<p class=" text-center">{$selectedNftCollection}</p>
				<div class=" bg-white w-max rounded-lg border border-[#E7E7E7] px-2">
					<p class=" text-center">#{1234}</p>
				</div>
			</div>
		</div>
	</div>
</div>
