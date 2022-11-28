<script lang="ts">
  import { tokenIdToPfp } from "$lib/constants/tokenIds";
  import {
    currentEpoch,
    epochExpiry,
    recentTxHash,
    rinkeByBaseUrl,
    selectedNft,
    selectedNftCollection,
    selectedStrikePrice,
  } from "$lib/store";
  import { getOptionName } from "$lib/utils/utils";
  import { closeModal } from "./closeModal";
</script>

<!-- Deposit preview title -->

<div class=" flex justify-between items-center">
  <p class=" font-medium text-base text-[#E137FF]">NFT Deposit Successful!</p>
  <img class=" cursor-pointer" src="/cross.svg" alt="" on:click={closeModal} />
</div>

<!-- border with call in it -->

<div
  class=" flex-1 flex flex-col justify-between border border-[#E2D8FF] rounded-xl p-6 gap-4 "
>
  <!-- Card -->
  <div class=" bg-[#6129FF] flex flex-col p-6 items-center gap-3 rounded-xl">
    <!-- Tick -->
    <img class=" h-7" src="/checkmark.svg" alt="" />

    <!-- Yay -->
    <p class=" font-[700]  yay text-3xl ">Yay!</p>

    <!-- SUccessfully deposited -->
    <p class=" text-[#CAB8FF] font-medium">
      You’ve successfully deposited <span class=" font-bold text-white"
        >{$selectedNftCollection + " #" + $selectedNft}</span
      >
    </p>

    <p class=" text-[#CAB8FF] font-medium">and minted</p>

    <!-- option name -->
    <p class=" text-[#FFFFFF] font-bold">
      {getOptionName(
        $currentEpoch.toString(),
        $selectedStrikePrice,
        $epochExpiry,
        $selectedNftCollection
      )}
    </p>

    <!-- PFP -->
    <div class=" h-[140px] w-[140px] bg-[#FBF7FD] rounded-3xl p-3">
      <img class=" rounded-3xl" src={tokenIdToPfp[$selectedNft]} alt="" />
    </div>
  </div>

  <div class=" flex flex-row justify-between p-5 bg-gray-200 rounded-lg">
    <div class="flex flex-col">
      <div>
        <p class="  font-light text-left">Status</p>
      </div>
      <div>
        <p class=" text-left font-medium py-2 text-[#3FBC8F]">Completed</p>
      </div>
    </div>
    <div class="flex flex-col">
      <div>
        <p class=" font-light text-right">Transaction ID</p>
      </div>
      <div>
        <p class=" text-right font-medium text-[#C64DFF] py-2">
          0msx836930...87r398
        </p>
      </div>
    </div>
  </div>

  <!-- divider -->
  <div class=" bg-[#DDDBE0] h-[1px]" />

  <div class=" flex justify-center gap-2">
    <!-- View tx -->
    <p class=" text-[#6129FF]">View this transaction</p>
    <a
      href={$rinkeByBaseUrl + $recentTxHash}
      target="_blank"
      class=" cursor-pointer"
    >
      <img src="/redirect.svg" alt="" />
    </a>
  </div>
</div>

<style>
  .yay {
    background: linear-gradient(
      86.1deg,
      #97d7ff -3%,
      #ff8ce2 50%,
      #ffc80e 103%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
