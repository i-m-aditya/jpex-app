<script>
  import "../app.css";
  import Modal from "$lib/modals/Modal.svelte";
  import { entered_code, lock } from "$lib/store";


  $: if ($entered_code == "wagmi") {
    lock.set(false);
  }
</script>

{#if $lock}
  <div class=" flex flex-col h-screen items-center justify-center">

    <input class=" outline-none focus" type="password" placeholder="Enter the code..." bind:value={$entered_code} autofocus >
  </div>
{:else}
  <slot />
  <Modal />
{/if}
