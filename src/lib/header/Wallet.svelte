<script lang="ts">
  import {
    walletConnected,
    address,
    openWallet,
  } from "$lib/store";
  import { getShortAddress } from "$lib/utils/utils";
  import { connectWallet, handleConnect } from "$lib/web3/wallet";

  import { onMount } from "svelte";

  import WalletDropdown from "./WalletDropdown.svelte";

  onMount(async () => {
    await handleConnect();
  });
</script>

{#if $walletConnected}
  <div class=" group relative font-poppins">
    <button
      class=" flex gap-3 items-center bg-[#F6F6FE] border border-[#E9ECFF] rounded-[28px] py-2 px-4"
      on:click={() => {
        openWallet.set(!$openWallet);
      }}
    >
      <!-- Metamask -->
      <img src="/metamask.svg" alt="" />

      <!-- Short address -->
      <p class=" text-sm">{getShortAddress($address)}</p>
      <!-- down arrow -->
      {#if $openWallet == false}
        <img class=" h-5" src="/pointdown.svg" alt="" />
      {:else}
        <img class=" h-5" src="/pointup.svg" alt="" />
      {/if}
    </button>
    <WalletDropdown />
  </div>
{:else}
  <div class=" rounded-3xl connect-wallet flex justify-center items-center">
    <div
      on:click={connectWallet}
      class=" transition ease-in cursor-pointer text-white text-sm font-poppins rounded-xl py-0.5 px-4 lg:text-base lg:py-2 "
    >
      Connect Wallet
    </div>
  </div>
{/if}

<style>
  .connect-wallet {
    background: linear-gradient(
      86.1deg,
      #97d7ff -3%,
      #ff8ce2 50%,
      #ffc80e 103%
    );
    border-radius: 28px;
  }
</style>
