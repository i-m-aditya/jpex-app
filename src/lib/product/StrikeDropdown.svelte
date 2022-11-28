<script lang="ts">
  import {
    baycStrikePrices,
    dropdownStatus,
    selectedStrikePrice,
  } from "$lib/store";

  function handleStrikePriceSelection(strikePrice) {
    console.log("SSS", strikePrice);
    selectedStrikePrice.set(strikePrice);
    dropdownStatus.set(0);
  }
  
</script>

<div
  class="group h-full relative bg-[#FFFFFF] font-poppins border rounded-lg transition-all ease-in-out translate-y-1"
>
  <button
    class=" text-gray-600 font-[630] py-2 px-4 inline-flex justify-between w-full items-center gap-2"
    on:click={() => {
      console.log("Hello");

      if ($dropdownStatus == 0) {
        dropdownStatus.set(1);
      } else {
        dropdownStatus.set(0);
      }
    }}
  >
    <span class="mr-1">{$selectedStrikePrice} WETH</span>
    <img class=" h-5" src="/pointDown.svg" alt="">
  </button>
  <ul
    class={`absolute hidden drop-shadow-2xl mt-2 bg-white transition-all  border rounded-lg w-full p-2 cursor-pointer ${
      $dropdownStatus == 0
        ? " "
        : " group-focus-within:block"
    }`}
  >
    {#each $baycStrikePrices as strike, index}
      <li class="">
        <button
          class=" w-full font-[550] text-gray-600 hover:bg-gray-100 py-3 cursor-pointer"
          on:click={() => handleStrikePriceSelection($baycStrikePrices[index])}
        >
          <p class=" text-left">{strike} WETH</p>
        </button>

        {#if index != 1}
          <div class=" bg-[#DDDBE0] h-[1px] my-2" />
        {/if}
      </li>
    {/each}
  </ul>
</div>
