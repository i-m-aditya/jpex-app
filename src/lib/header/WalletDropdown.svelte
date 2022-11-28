<script lang="ts">
  import { disconnectWallet } from "$lib/web3/wallet";
</script>

<div
  class=" border border-[#E2E5F8] bg-white my-2 w-full p-2 rounded-[12px] z-10 invisible absolute right-0 transition-all  group-focus-within:visible group-focus-within:translate-y-1"
>
  <div
    class="flex items-center gap-4  rounded-[12px] cursor-pointer hover:drop-shadow-2xl"
    on:click={disconnectWallet}
  >
    <img src="/disconnect.svg" alt="" />
    <div class=" font-medium  my-auto">Disconnect</div>
  </div>
</div>
