<script lang="ts">
  import { contractAddress } from "$lib/constants/contractAddress";
  import {
    baycStrikeToPremium,
    isSellerApproved,
    modalNumber,
    nftContractAddress,
    selectedNft,
    selectedNftCollection,
    selectedStrikePrice,
    showModal,
    showProcessingForApprove,
    userNFTs,
  } from "$lib/store";
  import { approveERC721 } from "$lib/web3/approve";
  import StrikeDropdown from "./StrikeDropdown.svelte";
</script>

<div class=" grid grid-cols-1 gap-2 mt-3">
  <p class=" font-poppins font-light text-[14px]">Select Strike Price</p>
  <StrikeDropdown />
  <p class=" font-poppins font-light text-[14px]">Select NFT</p>

  <div
    class="flex flex-row overflow-x-auto font-poppins text-[12px] cursor-pointer"
  >
    {#if $userNFTs != undefined}
      {#each $userNFTs["bayc"] as nft}
        <div
          class={` rounded-lg mr-2 p-2 flex flex-col items-center ${
            $selectedNft == nft.tokenId
              ? " bg-[#FFF3C7] border-2 border-[#FF75D8]  "
              : " border border-[#EEC1FF]"
          }`}
          on:click={() => {
            selectedNft.set(nft.tokenId);
          }}
        >
          <img
            class=" rounded-lg object-contain  h-[100px]"
            src={nft.img}
            alt=""
          />
          <div class=" w-[100px] h-0 bg-transparent" />
          <p class=" text-center">{$selectedNftCollection}</p>
          <div class=" bg-white w-max rounded-lg border border-[#E7E7E7] px-2">
            <p class=" text-center">#{nft.tokenId}</p>
          </div>
        </div>
      {/each}
    {:else}
      <p
        class="flex flex-row overflow-x-auto font-poppins text-[12px] cursor-pointer"
      >
        Loading ...
      </p>
    {/if}
  </div>
</div>

<!--  Display premium-->
<div
  class=" bg-[#F4F9FE] flex justify-center p-2 rounded-lg mt-3 gap-1 items-center"
>
  <img class=" h-5" src="/premium.svg" alt="" />
  <p class="  font-poppins text-[14px] font-light text-[#AF83B7]">
    Premium: {$baycStrikeToPremium[$selectedStrikePrice]}
    <span class=" font-medium">WETH</span>
  </p>
</div>
<!-- Preview Deposit -->
{#if $showProcessingForApprove === false}
  <div
    class=" premium-bg flex justify-center p-2 rounded-lg mt-3 cursor-pointer"
    on:click={async () => {
      if ($isSellerApproved == "0") {
        console.log("Seller approved 0");
        console.log("Selected NFT", $selectedNft);

        if ($selectedNft != "") {
          const tx = await approveERC721(
            $nftContractAddress,
            contractAddress.NftOptionSellersVault,
            $selectedNft
          );
          showProcessingForApprove.set(true);
          await tx.wait();
          showProcessingForApprove.set(false);
          isSellerApproved.set("1");
        }
      } else {
        // const tx = await depositNftInOptionSellerVault();
        // if (tx.toString() != '') {
        // 	isSellerApproved.set('0');
        // }
        // const position = {
        // 	user: $address,
        // 	nft: 'bayc',
        // 	pfpUrl: tokenIdToPfp[$selectedNft],
        // 	tokenId: $selectedNft,
        // 	option: getOptionName($currentEpoch.toString(), $selectedStrikePrice, $epochExpiry, 'bayc'),
        // 	quantity: 1,
        // 	status: 'ACTIVE',
        // 	epoch: $currentEpoch,
        // 	action: 'Short',
        // 	strike: $selectedStrikePrice,
        // 	oraclePrice: $oraclePrice,
        // 	expiry: $epochExpiry,
        // 	premium: $baycStrikeToPremium[$selectedStrikePrice],
        // 	isEpochExpired: false,
        // 	isClaimable: false,
        // 	txUrl:
        // 		'https://rinkeby.etherscan.io/tx/0x7edd96c496e7dab9b5dfc12e025ed170fb8954c21f9fb8fa7cf43b4f87c1ea05'
        // };
        // await saveNewShortPosition(position)
        // console.log("Saved short position");

        modalNumber.set(2);
        showModal.set(true);
      }
    }}
  >
    <p class=" text-white ">
      {$isSellerApproved == "0" ? "Approve NFT" : "Deposit NFT Preview"}
    </p>
  </div>
{:else}
  <button
    class=" bg-[#3E2681] flex justify-center p-2 rounded-lg mt-3 cursor-pointer w-full"
  >
    <p class="  text-white">Approving NFT...</p>
    <img class=" animate-spin h-6 w-6" src="/loader-1.svg" alt="" />
  </button>
{/if}

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
