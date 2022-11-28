<script lang="ts">
  import { selectedPage } from "$lib/store";
  import { getAllPregnantKitties } from "$lib/web3/cryptokitties";

  import Wallet from "./Wallet.svelte";
</script>

<div
  class="flex flex-row justify-between items-center px-5 h-16 left-0 right-0 bg-white backdrop-blur-xl font-poppins"
>
  <div class="flex items-center">
    <a href="/">
      <div
        class="flex w-max items-center "
        on:click={() => {
          if ($selectedPage !== "vault") {
            selectedPage.set("vault");
          }
        }}
      >
        <img src="/jpex-logo.svg" alt="" />
        <div class=" text-xl font-light">
          Jpe<span class=" font-extrabold">X</span>
        </div>
      </div>
    </a>
  </div>
  <div class="flex ml-10 gap-5 invisible md:visible">
    <a href="/">
      <div
        class={`text-center ${
          $selectedPage === "vault"
            ? " font-semibold text-[#5A40FF] "
            : " text-[#8387B0] "
        }`}
        on:click={() => {
          if ($selectedPage !== "vault") {
            selectedPage.set("vault");
          }
        }}
      >
        Vault
      </div>
    </a>

    <a href="/portfolio">
      <div
        class={`text-center ${
          $selectedPage === "portfolio"
            ? " font-semibold text-[#5A40FF] "
            : " text-[#8387B0] "
        } `}
        on:click={() => {
          if ($selectedPage !== "portfolio") {
            selectedPage.set("portfolio");
          }
        }}
      >
        Portfolio
      </div>
    </a>

    <!-- <a href="/airdrop">
      <div
        class={`text-center ${
          $selectedPage === "airdrop"
            ? " font-semibold text-[#5A40FF] "
            : " text-[#8387B0] "
        } `}
        on:click={() => {
          if ($selectedPage !== "airdrop") {
            selectedPage.set("airdrop");
          }
        }}
      >
        Airdrop
      </div>
    </a> -->
  </div>
  
  <div class="right-2 flex gap-2">
    <a class=" hidden lg:flex bg-[#ddddf6] cursor-pointer items-center  py-2 px-4 rounded-[28px]" href="https://app.uniswap.org/#/swap?outputCurrency=0xc778417e063141139fce010982780140aa0cd5ab" target="_blank">
      Swap to WETH
    </a>
    <Wallet />
  </div>
</div>


