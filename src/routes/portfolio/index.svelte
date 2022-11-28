<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import Longs from "$lib/portfolio/Longs.svelte";
  import Shorts from "$lib/portfolio/Shorts.svelte";
  import {
    address,
    displayLongPositions,
    longPositions,
    shortPositions,
    walletConnected,
  } from "$lib/store";

  import { fly } from "svelte/transition";
  import { quadIn } from "svelte/easing";
  // @ts-ignore
  import { afterUpdate } from "svelte";
  import {
    getActiveLongsForUser,
    getActiveShortsForUser,
  } from "$lib/db/positions";

  afterUpdate(async () => {
    if ($address !== "") {
      if ($longPositions === undefined) {
        console.log("HEllo longs");

        const lp = await getActiveLongsForUser($address);
        longPositions.set(lp);
      }

      if ($shortPositions === undefined) {
        const sp = await getActiveShortsForUser($address);
        shortPositions.set(sp);
      }
    }
  });

  let innerWidth = 0;
  let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Header />

{#if $walletConnected}
  {#if innerWidth > 1200 && innerHeight > 600}
    <div
      in:fly={{
        duration: 300,
        x: 0,
        y: 10,
        opacity: 0.1,
        easing: quadIn,
      }}
      class=" border-2 rounded-lg mx-14 my-12 grid grid-cols-1 p-10 gap-4 "
    >
      <div class=" font-poppins text-xl font-bold">Active Positions</div>

      <!-- Premium collected -->
      <div
        class=" flex flex-row justify-between p-4 bg-gray-100 rounded-lg font-poppins"
      >
        <div class="flex flex-col">
          <div>
            <p class=" text-[#6F6F6F] text-left">Premium Collected</p>
          </div>
          <div class=" flex gap-2 items-center mt-1">
            <div class=" border bg-white rounded p-1">
              <img class=" h-5" src="/eth.png" alt="" />
            </div>
            <p class=" text-left  font-semibold text-lg text-[#E137FF]">
              {innerHeight}
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <div>
            <p class=" text-[#6F6F6F] text-right">ROI</p>
          </div>
          <div>
            <p class=" text-right  mt-2 font-semibold text-lg">
              {innerWidth}
            </p>
          </div>
        </div>
      </div>
      <!-- Postion & recent tx -->
      <div
        class=" flex flex-row font-poppins items-center text-[#54587B] font-[500] text-[14px] p-2"
      >
        <div
          class={` rounded-[100px] px-4 py-2 cursor-pointer ${
            $displayLongPositions === true ? " bg-[#363636] text-white " : ""
          }`}
          on:click={() => {
            if ($displayLongPositions === false) {
              displayLongPositions.set(true);
            }
          }}
        >
          NFT Options Bought
        </div>
        <div
          class={` rounded-[100px] px-4 py-2 ml-5 cursor-pointer ${
            $displayLongPositions === false ? " bg-[#363636] text-white " : ""
          }`}
          on:click={() => {
            if ($displayLongPositions === true) {
              displayLongPositions.set(false);
            }
          }}
        >
          NFT Options Sold
        </div>
      </div>

      <!-- divider -->
      <div class=" bg-[#DDDBE0] h-[1px]" />

      <!-- positions list -->

      {#if $displayLongPositions === true}
        <div
          class=" flex justify-between  py-2 px-6 bg-[#F6F6F6] rounded-lg font-poppins items-center mt-1 text-[#54587B] font-[500] text-[14px]"
          in:fly={{
            duration: 300,
            x: -20,
            y: 0,
            opacity: 0.1,
            easing: quadIn,
          }}
        >
          <div class=" flex justify-between w-96 ">
            <p>Symbol</p>
            <p class="">Action</p>
          </div>
          <div class=" grid grid-cols-6 gap-2 items-center">
            <p class=" ">Premium</p>
            <p class=" ">Quantity</p>

            <div>
              <p class="">Oracle Price</p>
              <p class=" text-[11px]  font-light">(in weth)</p>
            </div>

            <div class=" ">PNL</div>
            <div class=" ">Expired</div>
            <p class=" w-[120px] text-center 	">Claim</p>
          </div>
        </div>
        <div
          class=" grid grid-cols-1 gap-2 overflow-y-auto"
          in:fly={{
            duration: 300,
            x: 0,
            y: 20,
            opacity: 0.1,
            easing: quadIn,
          }}
        >
          {#if $longPositions != undefined}
            {#each $longPositions as position}
              <Longs {position} />
            {/each}
          {:else}
            <p>Loading ...</p>
          {/if}
        </div>
      {:else}
        <div
          class=" flex justify-between py-2 px-6 bg-[#F6F6F6] rounded-lg font-poppins items-center mt-1 text-[#54587B] font-[500] text-[14px]"
          in:fly={{
            duration: 300,
            x: 20,
            y: 0,
            opacity: 0.1,
            easing: quadIn,
          }}
        >
          <div class=" flex justify-between w-[350px] mr-10 ">
            <p>Symbol</p>
            <p class="">Action</p>
          </div>
          <div class=" flex-1 grid grid-cols-6 items-center ">
            <p class="  w-[140px]">TokenId</p>
            <p class=" ">Quantity</p>
            <p class=" ">Premium</p>

            <div class="">
              <p class="">Oracle Price</p>
              <p class=" text-[11px] font-light">(in weth)</p>
            </div>
            <div class="">
              <p class="">PNL</p>
              <p class=" text-[11px] font-light">(in weth)</p>
            </div>
            <p class="  text-center">Claim</p>
          </div>
        </div>
        <div
          class=" grid grid-cols-1 gap-2 overflow-y-auto"
          in:fly={{
            duration: 300,
            x: 0,
            y: 20,
            opacity: 0.1,
            easing: quadIn,
          }}
        >
          {#if $shortPositions != undefined}
            {#each $shortPositions as position}
              <Shorts {position} />
            {/each}
          {:else}
            <p>Loading ...</p>
          {/if}
        </div>
      {/if}
    </div>
  {:else}
    <div class="flex justify-center items-center text-3xl font-bold">
      You need larger screen to view portfolio
    </div>
  {/if}
{:else}
  <div
    class=" flex flex-col justify-center items-center text-3xl font-light flex-1"
  >
    Connect wallet to view portfolio
  </div>
{/if}
