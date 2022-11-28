<script lang="ts">
  export let content;
</script>

<div class=" w-[350px] font-poppins relative ">
 
  <div class=" flex-wrap flex">
    <!-- Cover image -->
  <div class="top-2 left-2">
    <img class=" rounded-t-xl object-fill h-28 w-[350px]" src={content.cover} alt="" />
  </div>

  <!-- Main content -->
  <div
    class="left-2 rounded-[20px] rounded-t-none  bg-white drop-shadow-2xl"
  >
    <!-- PFP -->
    <div
      class=" pfp w-20 h-20 bg-white rounded-2xl left-5 drop-shadow-2xl"
    >
      <div class=" relative p-0.5 flex flex-col">
        <img class="rounded-xl" src={content.pfp} alt="" />
      </div>
    </div>
    <div class="  top-14 p-2">
      <div class="p-2 grid grid-cols-1 gap-2">
        <p class=" font-semibold text-base ">
          {content.name}
        </p>
        <!-- <p class=" font-[250] text-xs">
          {content.description}
        </p> -->
        <!-- NFT List scrollable -->
        <div class="grid grid-cols-5 gap-3">
          <img class=" rounded-md" src={content.nftsList[0]} alt="" />
          <img class=" rounded-md" src={content.nftsList[1]} alt="" />
          <img class=" rounded-md" src={content.nftsList[2]} alt="" />
          <img class=" rounded-md" src={content.nftsList[3]} alt="" />
          <div class=" rounded-md">
            <img class="  rounded-md" src={content.nftsList[0]} alt="" />
            <!-- <div
              class="text-white font-base text-sm  bg-black h-full w-full opacity-80 rounded-md p-2"
            >
              <p>{content.size}</p>
              <p>items</p>
            </div> -->
          </div>
        </div>
        <!-- Options : oracle price and expiry -->

        <div
          class=" flex flex-row justify-between px-3 py-2 bg-gray-200 rounded-lg "
        >
          <div class="flex flex-col gap-2">
            <div>
              <p class=" text-[#6F6F6F] text-left text-sm font-[400]">
                Oracle Price
              </p>
            </div>
            <div class=" flex items-center gap-1">
              <div class=" border bg-white rounded p-1">
                <img class=" h-3" src="/eth.png" alt="" />
              </div>
              <p class=" text-left text-sm font-medium">
                {content.oraclePrice} ETH
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p class=" text-[#6F6F6F] text-sm font-[400] text-right">
                Expiry
              </p>
            </div>
            <div>
              <p class=" text-right text-sm  font-medium ">{content.expiry}</p>
            </div>
          </div>
        </div>

        <!-- Deposits Info -->

        <div class=" flex flex-row justify-between ">
          <div class="flex flex-col gap-2">
            <div>
              <p class=" text-[#000000] text-left font-light text-[12px] ">
                Current Deposits
              </p>
            </div>
            <div>
              <p class=" text-left text-sm font-medium text-[#D06CFF]">
                {content.currentDeposits} WETH
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p class=" text-[#000000] text-right font-light text-[12px] ">
                Max Capacity
              </p>
            </div>
            <div>
              <p class=" text-right text-sm font-medium ">
                {content.maxCapacity} WETH
              </p>
            </div>
          </div>
        </div>

        <div class="w-full bg-gray-200 h-1.5 rounded-xl">
          <div class="bg-[#D06CFF] h-1.5 rounded-xl" style="width: 45%" />
        </div>
      </div>
    </div>
  </div>

  </div>
  
</div>

<style>
  /* .gradient-border {
    border: 2px 1em transparent;
    border-radius: 20px;
    background-image: linear-gradient(white, white),
      linear-gradient(to right bottom, #74bcff, #ffb930);
    background-origin: border-box;
    background-clip: content-box, border-box;
  } */
  .pfp {
    margin-top: calc(-24px);
    margin-left: 10px;
  }
</style>
