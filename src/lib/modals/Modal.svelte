<script>
  import { modalNumber, showModal } from "$lib/store";
  import { ConfettiExplosion } from "svelte-confetti-explosion";
import { closeModal } from "./closeModal";
  import DepositNftPreview from "./DepositNftPreview.svelte";
  import DepositNftSuccessful from "./DepositNftSuccessful.svelte";
  import DepositPreview from "./DepositPreview.svelte";
  import DepositSuccessful from "./DepositSuccessful.svelte";
</script>

{#if $showModal == true}
  <div
    class="fixed inset-0 z-50 outline-none focus:outline-none flex w-full backdrop-blur-md"
  >

    <div class="relative w-full flex justify-center h-full items-center">
      {#if $modalNumber == 1 || $modalNumber == 3}
        <div class=" fixed p-10 z-20 top-0">
          <ConfettiExplosion particleCount={200} force={0.3} />
        </div>
      {/if}

      <div
        class="bg-white rounded-2xl fixed object-center p-10 flex flex-col gap-3"
      >
        {#if $modalNumber == 0}
          <DepositPreview />
        {:else if $modalNumber == 1}
          <DepositSuccessful />
        {:else if $modalNumber == 2}
          <DepositNftPreview />
        {:else if $modalNumber == 3}
          <DepositNftSuccessful />
        {/if}
      </div>
    </div>
  </div>

  <div class="opacity-40 fixed inset-0 z-10 bg-black "
  
  on:click={closeModal}
  />
{/if}
