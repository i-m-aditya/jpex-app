<script lang="ts">
  import { tokenIdToPfp } from "$lib/constants/tokenIds";
  import { saveNewShortPosition } from "$lib/db/positions";
  import {
    address,
    baycStrikeToPremium,
    currentEpoch,
    epochExpiry,
    modalNumber,
    oraclePrice,
    recentTxHash,
    rinkeByBaseUrl,
    selectedNft,
    selectedNftCollection,
    selectedStrikePrice,
    showProcessingForNftDeposit,
  } from "$lib/store";
  import { getOptionName } from "$lib/utils/utils";
  import { depositNftInOptionSellerVault } from "$lib/web3/depositNft";
  import { closeModal } from "./closeModal";
</script>

<div>
  <!-- Deposit preview title -->

  <div class=" flex justify-between items-center">
    <p class=" font-medium text-base text-[#E137FF]">Depositing NFT Preview</p>
    <img
      class=" cursor-pointer"
      src="/cross.svg"
      alt=""
      on:click={closeModal}
    />
  </div>

  <!-- border with call in it -->

  <div
    class=" flex-1 flex flex-col  gap-3 border border-[#E2D8FF] rounded-xl p-6 "
  >
    <!-- Card -->
    <div
      class=" h-3/5 rounded-xl bg-[#6129FF] w-full flex flex-row items-center p-6"
    >
      <!-- PFP left-->
      <div class=" h-[140px] w-[140px] bg-[#FBF7FD] rounded-xl p-3">
        <img class=" rounded-xl" src={tokenIdToPfp[$selectedNft]} alt="" />
      </div>

      <!-- content right -->

      <div class=" flex-1 grid grid-cols-1 gap-4 p-2  text-white ml-3">
        <p class=" font-semibold text-lg">
          {getOptionName(
            $currentEpoch.toString(),
            $selectedStrikePrice,
            $epochExpiry,
            $selectedNftCollection
          )}
        </p>

        <div
          class=" bg-[#FFFFFF] rounded-xl text-[#AF83B7] p-2 flex items-center gap-1 justify-center"
        >
          <img class=" h-5" src="/premium.svg" alt="" />
          <p class="">
            Premium: <span class=" font-semibold text-[#E137FF]"
              >{$baycStrikeToPremium[$selectedStrikePrice]} WETH</span
            >
          </p>
        </div>

        <div class=" flex justify-between font-[300] text-sm">
          <p>Strike Price:</p>
          <p class=" text-[#FFDF6B] font-semibold">
            {$selectedStrikePrice} WETH
          </p>
        </div>

        <!-- <div class=" flex  justify-between font-[300] text-sm">
					<p>Amount:</p>
					<p class=" text-[#FFDF6B] font-semibold">{$depositAmount} WETH</p>
				</div>
				<div class=" flex  justify-between font-[300] text-sm">
					<p>Quantity:</p>
					<p class=" text-[#FFDF6B] font-semibold">
						{getQuantity($depositAmount, $baycStrikeToPremium[$selectedStrikePrice])}
					</p>
				</div> -->
      </div>
    </div>

    <!-- deposit -->

    {#if $showProcessingForNftDeposit === false}
      <div
        class=" w-full premium-bg p-2 flex justify-center rounded-xl text-white cursor-pointer"
        on:click={async () => {
          console.log("Deposit NFT");
          
          const tx = await depositNftInOptionSellerVault();
          showProcessingForNftDeposit.set(true);
          const res = await tx.wait();

          console.log("Response", res);

          const position = {
            user: $address,
            nft: $selectedNftCollection,
            pfpUrl: tokenIdToPfp[$selectedNft],
            tokenId: $selectedNft,
            option: getOptionName(
              $currentEpoch.toString(),
              $selectedStrikePrice,
              $epochExpiry,
              "bayc"
            ),
            quantity: 1,
            status: "ACTIVE",
            epoch: $currentEpoch,
            action: "Short",
            strike: $selectedStrikePrice,
            oraclePrice: $oraclePrice,
            expiry: $epochExpiry,
            premium: $baycStrikeToPremium[$selectedStrikePrice],
            isEpochExpired: false,
            isClaimable: false,
            txUrl: $rinkeByBaseUrl + res.transactionHash,
          };

          recentTxHash.set(res.transactionHash);
          await saveNewShortPosition(position);
          console.log("Saved short position");
          showProcessingForNftDeposit.set(false);
          modalNumber.set(3);
          console.log("Saved new position");
        }}
      >
        <p>Deposit</p>
      </div>
    {:else}
      <button
        class=" bg-[#3E2681] flex justify-center p-2 rounded-xl cursor-pointer"
      >
        <p class=" text-white">Depositing...</p>
        <img class=" animate-spin h-6 w-6" src="/loader-1.svg" alt="" />
      </button>
    {/if}

    <!-- Gas price -->

    <div class=" w-full p-2 justify-center flex items-center gap-1">
      <p class=" text-[#8779AF]">
        NFT Contract: <span class=" text-[#333333]">0xas....4fjs</span>
      </p>
      <!-- Question mark -->
      <img src="/question.svg" alt="">
    </div>
  </div>
</div>

<style>
  .premium-bg {
    background: linear-gradient(
      72.88deg,
      #aacafb -4.23%,
      #fe90d9 52.37%,
      #febd38 97.09%
    );
  }
</style>
