<script lang="ts">
  import { page } from "$app/stores";
  import { collections, vaultsData } from "$lib/constants/content";
  import {
    getActiveLongsForUser,
    getActiveShortsForEpoch,
    getActiveShortsForUser,
  } from "$lib/db/positions";
  import Header from "$lib/header/Header.svelte";
  import { getNftHoldingsForAddress } from "$lib/product/getNftHoldings";
  import OptionBuyer from "$lib/product/OptionBuyer.svelte";
  import OptionSeller from "$lib/product/OptionSeller.svelte";
  import {
    address,
    baycDescription,
    currentEpoch,
    depositAmount,
    epochExpiry,
    ethersProvider,
    isWethApproved,
    longPositions,
    nftContractAddress,
    nftsLocked,
    optionViewer,
    selectedSectionInVaults,
    shortPositions,
    userNFTs,
    walletConnected,
    wethBalance,
  } from "$lib/store";
  import { quadIn, quadOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  // @ts-ignore

  import ApproveWeth from "$lib/product/ApproveWeth.svelte";
  import { formatExpiry, getShortAddress } from "$lib/utils/utils";
  import VaultStrategy from "$lib/VaultStrategy.svelte";
  import { afterUpdate } from "svelte";

  console.log($page.params.nft);

  let nft = "bayc";

  console.log(vaultsData[nft]);

  let recentTransactions = vaultsData[nft].recentTransactions;
  // Temp hack for bayc collection
  let nftCollectionImgList = collections[0].nftsList;

  afterUpdate(async () => {
    if ($address !== "") {
      if ($longPositions === undefined) {
        console.log("Halo longs");

        const lp = await getActiveLongsForUser($address);
        const lpReverse = [];
        for (let index = lp.length - 1; index >= 0; index--) {
          lpReverse.push(lp[index]);
        }
        console.log("LP reverse", lpReverse);

        longPositions.set(lpReverse);
      }

      if ($shortPositions === undefined) {
        // sp -> short positions
        console.log("Halo shorts");

        const sp = await getActiveShortsForUser($address);
        // In reverse order so that recent tx comes first
        const spReverse = [];
        for (let index = sp.length - 1; index >= 0; index--) {
          spReverse.push(sp[index]);
        }

        console.log("SP reverse", spReverse);
        shortPositions.set(spReverse);
      }

      if ($nftsLocked == undefined) {
        // console.log('After Update');

        // const nftsLocked_ = await getNftHoldingsForAddress(
        // 	contractAddress.NftOptionSellersVault,
        // 	$nftContractAddress,
        // 	$ethersProvider
        // );

        /**
         * \
         * structure for nfts
         * required
         * 1. Pfp
         * 2. Strike Price
         * 3. Expiry
         * 4. Owner
         *
         */

        const epochShorts = await getActiveShortsForEpoch(
          $address,
          $currentEpoch.toString()
        );
        const nftsLocked_ = [];
        for (let index = epochShorts.length - 1; index >= 0; index--) {
          const lockedNft = {
            pfpUrl: epochShorts[index].pfpUrl,
            strike: epochShorts[index].strike,
            expiry: epochShorts[index].expiry,
            owner: epochShorts[index].user,
            tokenId: epochShorts[index].tokenId,
          };
          nftsLocked_.push(lockedNft);
        }

        console.log("Nfts locked", nftsLocked_);

        nftsLocked.set(nftsLocked_);
      }
    }
  });

  const switchOptionViewer = async () => {
    if ($optionViewer == "buyer") {
      optionViewer.set("seller");
      await getUserNFTs();
    } else {
      optionViewer.set("buyer");
    }
  };

  function clickedMax() {
    const wethBal = $wethBalance;
    depositAmount.set(wethBal);
  }
  getNftHoldingsForAddress;
  async function getUserNFTs() {
    console.log("Get user nfts");

    if ($userNFTs == undefined) {
      const userSet = await getNftHoldingsForAddress(
        $address,
        $nftContractAddress,
        $ethersProvider
      );

      if (userSet != undefined) {
        console.log("UserSet");
        console.log(userSet["bayc"]);

        userNFTs.set(userSet);
        console.log($userNFTs["bayc"]);
      }
    }
  }

  // Resolution
  let innerHeight = 0
  let innerWidth = 0
</script>


<svelte:window bind:innerWidth bind:innerHeight />
<div class=" flex flex-col bg-gray-50">
  <Header />
  <div
    class=" flex flex-col lg:flex-row flex-1 p-1 font-poppins "
    in:fly={{
      duration: 300,
      x: 0,
      y: 40,
      opacity: 0.1,
      easing: quadOut,
    }}
  >
    <!-- left section -->
    <div class=" w-full lg:w-3/5 p-4 h-screen max-h-screen">
      <div class=" h-full border rounded-xl p-1 bg-gray-100">
        <div
          class=" relative h-full border rounded-xl bg-white flex flex-col p-8 gap-3 overflow-y-auto"
        >
          <!-- Floor price on top of pfp -->
          <!-- <div
            class="  w-max p-[2px] mt-4 ml-3 rounded-xl flex flex-col"
          >
            <div class=" backdrop-blur-md bg-white/30 rounded-xl p-2">
              <p class=" font-[400] text-[#6F6F6F]">Oracle Price</p>
              <div class=" flex gap-1 text-sm items-center">
                <img class=" h-5" src="/eth.png" alt="" />
                <p>0.98 WETH</p>
              </div>
            </div>
          </div> -->

          <!-- vault description -->
          <div class="flex flex-row items-center">
            <!-- left pfp -->
            <img
              class=" w-2/5 p-2 rounded-2xl hidden lg:block"
              src={nftCollectionImgList[2]}
              alt=""
            />
            <div class="p-2 ml-3">
              <!-- Card copy -->
              <div class="p-2 grid grid-cols-1 gap-2">
                <p
                  class=" font-poppins text-2xl lg:text-3xl font-semibold tracking-[0.01em] "
                >
                  Bayc-Call-300522
                </p>

                <!-- NFT List -->
                <div class="grid grid-cols-5 gap-3">
                  <img
                    class=" rounded-md"
                    src={nftCollectionImgList[1]}
                    alt=""
                  />
                  <img
                    class=" rounded-md"
                    src={nftCollectionImgList[2]}
                    alt=""
                  />
                  <img
                    class=" rounded-md"
                    src={nftCollectionImgList[3]}
                    alt=""
                  />
                  <img
                    class=" rounded-md"
                    src={nftCollectionImgList[0]}
                    alt=""
                  />
                  <div class=" relative rounded-md">
                    <img
                      class=" rounded-md"
                      src={nftCollectionImgList[3]}
                      alt=""
                    />
                    <!-- <div
                      class="   text-white font-base text-sm font-poppins bg-black h-full w-full opacity-80 rounded-md p-2"
                    >
                      <p>10k</p>
                      <p>items</p>
                    </div> -->
                  </div>
                </div>

                <p
                  class=" font-poppins font-[400] text-[12px] py-2 hidden lg:block"
                >
                  {$baycDescription}
                </p>
                <!-- Options : oracle price and expiry -->

                <div
                  class=" flex flex-col  p-2 border border-[#DCDCDC] rounded-lg"
                >
                  <div class="flex flex-row justify-between">
                    <div>
                      <p class=" text-[#6F6F6F]  text-left text-sm font-[400]">
                        Epoch
                      </p>
                    </div>
                    <div>
                      <p class=" text-left text-sm">{$currentEpoch}</p>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between">
                    <div>
                      <p class=" text-[#6F6F6F] text-left text-sm font-[400]">
                        Expiry
                      </p>
                    </div>
                    <div>
                      <p class=" text-left text-sm ">
                        {formatExpiry($epochExpiry)}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Deposits Info -->

                <div class=" flex flex-row justify-between ">
                  <div class="flex flex-col gap-2">
                    <div>
                      <p
                        class=" text-[#000000] text-left font-light text-[12px] "
                      >
                        Current Deposits
                      </p>
                    </div>
                    <div>
                      <p class=" text-left text-sm font-medium text-[#D06CFF]">
                        25 WETH
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div>
                      <p
                        class=" text-[#000000] text-right font-light text-[12px] "
                      >
                        Max Capacity
                      </p>
                    </div>
                    <div>
                      <p class=" text-right text-sm font-medium ">100 WETH</p>
                    </div>
                  </div>
                </div>

                <div class="w-full bg-gray-200 h-1.5 rounded-xl">
                  <div
                    class="bg-[#D06CFF] h-1.5 rounded-xl"
                    style="width: 25%"
                  />
                </div>
              </div>
              <!-- Card copy ended-->
            </div>
          </div>
          <!-- divider -->
          <div class=" bg-[#DDDBE0] h-[1px] mt-4" />

          <!-- Recent transactions -->
          <div class=" font-[600] text-xl">Recent Transactions</div>
          {#if $selectedSectionInVaults === 1}
            <div
              class=" bg-[#F6F6F6] rounded-lg hidden lg:grid lg:grid-cols-5 font-poppins items-center mt-1 text-[#54587B] text-sm font-light lg:font-[500] lg:text-[14px] justify-start py-2 px-4   "
            >
              <p>ACTION</p>
              <p class=" ">NFT VAULT</p>
              <p class=" ">QUANTITY</p>
              <p class="">PREMIUM</p>
            </div>
            {#if $walletConnected}
              <div
                class="font-poppins text-[12px] h-full overflow-y-auto"
                in:fly={{
                  duration: 350,
                  x: 0,
                  y: 20,
                  opacity: 0.1,
                  easing: quadIn,
                }}
              >
                {#if $longPositions !== undefined}
                  {#each $longPositions as position}
                    <div
                      class=" bg-[#F1F5EB] rounded-lg grid grid-cols-5 font-poppins items-center mt-2 text-[#54587B] font-[500] text-[14px] justify-start py-2 px-4"
                    >
                      <div class=" flex py-2 px-3 items-center ">
                        <img
                          class=" rounded-md  h-[40px]"
                          src="/bayc/bayc-8.png"
                          alt=""
                        />
                        <div class=" flex items-center ml-2 text-[10px] gap-1">
                          <p
                            class={`font-poppins text-white rounded-2xl py-[2px] px-2 font-[350] text-sm w-max mt-2 bg-gradient-to-tr from-[#D4D836] via-[#30B17B] to-[#67B5C6] `}
                          >
                            {position.action.toString().toUpperCase()}
                          </p>
                          <img class=" mt-2" src="/long.svg" alt="" />
                        </div>
                      </div>
                      <div class=" grid grid-cols-1">
                        <p>{position.option}</p>
                        <p class=" font-light text-[10px]">
                          Strike Price {position.strike} WETH
                        </p>
                      </div>
                      <p class="ml-4">{position.quantity}</p>
                      <div class="">
                        <p class=" text-[#24A065]">+{position.premium} WETH</p>
                      </div>
                      <a
                        href={position.txUrl}
                        target="_blank"
                        class=" p-2 flex justify-center"
                      >
                        <img src="/redirect.svg" alt="" />
                      </a>
                    </div>
                  {/each}
                {/if}

                {#if $shortPositions !== undefined}
                  {#each $shortPositions as position}
                    <div
                      class=" bg-[#F1F5EB] rounded-lg grid grid-cols-5 font-poppins items-center mt-2 text-[#54587B] font-[500] text-[14px] justify-start py-2 px-4"
                    >
                      <div class=" flex p-2 items-center">
                        <img
                          class=" rounded-md  h-[40px]"
                          src={position.pfpUrl}
                          alt=""
                        />
                        <div class=" flex items-center ml-2 text-[10px] gap-1">
                          <p
                            class={`font-poppins text-white rounded-2xl py-[2px] px-2 font-[350] text-sm  w-max mt-2  bg-gradient-to-tr from-[#FBAAAA] via-[#FF72F1] to-[#FE5C38] `}
                          >
                            {position.action.toString().toUpperCase()}
                          </p>
                          <img class=" mt-2" src="/short.svg" alt="" />
                        </div>
                      </div>
                      <div class=" grid grid-cols-1">
                        <p>{position.option}</p>
                        <p class=" font-light text-[10px]">
                          Strike Price {position.strike} WETH
                        </p>
                      </div>
                      <p class=" ml-4">{position.quantity}</p>
                      <div class="">
                        <p class=" text-[#24A065]">+{position.premium} WETH</p>
                      </div>

                      <a
                        href={position.txUrl}
                        target="_blank"
                        class=" p-2 flex justify-center"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3 6C3 4.34315 4.34315 3 6 3H11C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z"
                            fill="#444444"
                          />
                          <path
                            d="M19 9C19 9.55229 19.4477 10 20 10C20.5523 10 21 9.55229 21 9V5C21 3.89543 20.1046 3 19 3H15C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5L17.5858 5L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V9Z"
                            fill="#444444"
                          />
                        </svg>
                      </a>
                    </div>
                  {/each}
                {/if}
              </div>
            {:else}
              <div
                class=" flex flex-col justify-center items-center text-3xl font-light bg-[#F9FAFB] flex-1"
              >
                Connect Wallet to view portfolio
              </div>
            {/if}
            <!-- action bar -->
          {:else if $selectedSectionInVaults === 0}
            <div class=" font-poppins text-[12px] h-full">
              <VaultStrategy />
            </div>
          {/if}
        </div>
      </div>
    </div>

    <!-- right section -->
    <div class=" h-full w-full lg:w-2/5 p-4 max-w-full ">
      <div
        class=" border rounded-xl p-1 bg-gray-100 max-h-full overflow-y-auto items-center"
      >
        <div
          class=" h-full w-full border rounded-xl bg-white flex flex-col p-8"
        >
          <!-- speculator writer switch -->
          <div
            class=" bg-[#000000] rounded-xl flex flex-col justify-between p-4  text-white"
          >
            <div class=" flex flex-row justify-center items-center">
              <p class=" font-poppins font-medium mr-2">Option buyer</p>
              <!-- switch button -->
              <div
                class={`h-6 w-11  flex rounded-2xl mr-2 items-center  cursor-pointer ${
                  $optionViewer == "buyer"
                    ? " justify-start bg-white "
                    : " justify-end bg-white"
                }`}
                on:click={switchOptionViewer}
              >
                <div
                  class={`h-5 w-5 drop-shadow-3xl rounded-full mx-1 ${
                    $optionViewer == "buyer"
                      ? " bg-[#FF891D] "
                      : " bg-[#6C38FF] "
                  }`}
                />
              </div>
              <p class=" font-poppins font-medium">Option Seller</p>
            </div>
            <div
              class="flex justify-center font-poppins font-thin text-[14px] mt-4"
            >
              Switch between buyers and sellers
            </div>
          </div>

          <!-- deposit withdraw -->
          <div
            class=" flex flex-row justify-start  items-center font-poppins mt-4 cursor-pointer"
          >
            <div
              class={` font-medium text-white py-2 px-4  rounded-2xl leading-5 ${
                $optionViewer === "buyer" ? " bg-[#FF891D] " : " bg-[#6C38FF] "
              }`}
              in:fly={{
                duration: 350,
                x: -10,
                y: 0,
                opacity: 0.1,
                easing: quadIn,
              }}
            >
              Deposit
            </div>
            <div class=" font-medium rounded-2xl ml-3">Withdraw</div>
          </div>
          <!-- Divider -->
          <div class=" bg-[#DDDBE0] h-[1px] mt-4" />
          <!-- Select Strike Price and enter amound -->

          {#if $isWethApproved === false}
            <ApproveWeth />
          {:else}
            {#if $optionViewer == "buyer"}
              <div
                in:fly={{
                  duration: 350,
                  x: -20,
                  y: 0,
                  opacity: 0.1,
                  easing: quadIn,
                }}
              >
                <OptionBuyer />
              </div>
            {:else}
              <div
                in:fly={{
                  duration: 350,
                  x: 20,
                  y: 0,
                  opacity: 0.1,
                  easing: quadIn,
                }}
              >
                <OptionSeller />
              </div>
            {/if}
            <!-- Deposit Info -->
            <div class="flex justify-center p-1 rounded-lg mt-3">
              <p class="font-poppins text-[11px] text-[#54587B] font-light">
                Deposits for Bayc Vault will open on 25 June 2022. Learn more
              </p>
            </div>
            <!-- divider -->
            <!-- Divider -->
            <div class=" bg-[#DDDBE0] h-[1px] mt-4" />

            <!-- Nfts Locked in this vault -->
            <p class="  mt-3 font-poppins font-bold text-[20px]">
              NFTs locked in this vault
            </p>
            <div class="  mt-2 flex flex-col gap-2  overflow-x-auto">
              <div class="flex flex-row font-poppins text-[12px] w-max">
                {#if $nftsLocked != undefined}
                  {#each $nftsLocked as nft}
                    <div
                      class=" border border-[#EEC1FF] bg-[#FBF7FD] rounded-xl mr-2 p-2 flex gap-2 hover:drop-shadow-2xl"
                    >
                      <img
                        class=" rounded-xl  h-[100px]"
                        src={nft.pfpUrl}
                        alt=""
                      />

                      <div
                        class="flex flex-col gap-2 justify-center p-2 text-sm"
                      >
                        <p class=" text-[#58595E] font-medium">
                          Strike Price: <span
                            class=" text-[#D06CFF] font-semibold"
                            >{nft.strike} WETH</span
                          >
                        </p>
                        <p class=" text-[#58595E] font-medium">
                          Expiry: <span class=" text-black"
                            >{formatExpiry(nft.expiry)}</span
                          >
                        </p>
                        <div
                          class=" rounded-xl bg-white w-max border border-[#E7E7E7]"
                        >
                          <p class=" text-[#58595E]  p-2 font-medium">
                            Owner: <span class=" font-normal"
                              >{getShortAddress(nft.owner)}</span
                            >
                          </p>
                        </div>
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
          {/if}
        </div>
      </div>
    </div>
  </div>
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
</style>
