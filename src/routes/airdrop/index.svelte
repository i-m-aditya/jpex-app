<!-- <script lang="ts">
import Header from "$lib/header/Header.svelte";
import { showProcessingForClaimingNFT, worldIdVerified } from "$lib/store";

  import worldID from "@worldcoin/id";
  import { afterUpdate, onMount } from "svelte";

  const enableWorldID = async (): Promise<void> => {
    try {
      const result = await worldID.enable();

      
    worldIdVerified.set(true)
      console.log("World ID verified successfully: ", result);
    } catch (error) {
      console.log("ERRORRRR");

      console.error(error);
      enableWorldID().catch(console.error.bind(console));
    }
  };

  afterUpdate(() => {
    if (!worldID.isInitialized()) {
      worldID.init("world-id-container", {
        actionId: "0x330C8452C879506f313D1565702560435b0fee4C",
        signal: "0x5c679543E519eAcD7F8f8D15Fd15F9F9D77829dF",
      });
    }

    if (!worldID.isEnabled()) {
      enableWorldID().catch(console.error.bind(console));
    }
  });
</script>

<Header />
<div class=" flex gap-3 flex-col items-center font-poppins mt-28">
  <div class=" font-[800] text-[40px]">Get <span class=" text-pink-400">20% OFF</span> on trading fees</div>
  <div class=" font-bold text-[30px]">Early bird NFT</div>
  <div id="world-id-container" />

  {#if $showProcessingForClaimingNFT === false}
    <button
      class=" premium-bg flex justify-center px-4 py-2 rounded-[40px] mt-3 cursor-pointer"
        on:click={() => {
            if($worldIdVerified === false) {
                alert("Not Verified")
            } else {
                // Take Care of minting.
            }
        }}
    >
      <p class=" text-white font-semibold">Claim NFT</p>
    </button>
  {:else}
    <button
      class=" bg-[#3E2681] flex justify-center p-2 rounded-lg mt-3 cursor-pointer"
    >
      <p class=" font-medium text-lg text-white">Claiming...</p>
      <img class=" animate-spin h-6 w-6" src="/loader-1.svg" alt="" />
    </button>
  {/if}
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
</style> -->
