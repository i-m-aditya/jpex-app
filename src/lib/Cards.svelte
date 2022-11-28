<script lang="ts">
  export let content;
</script>

<div class=" w-[350px] font-poppins  relative ">
  <!-- Border -->
  <div
    class=" absolute border border-[#EFEFF2] gradient-border w-[365px] h-[470px] p-[1px] "
  />
  <!-- Cover image -->
  <div class=" absolute top-2 left-2 h-[300px] w-[350px] ">
    <img class=" rounded-t-xl" src={content.cover} alt="" />
  </div>

  <!-- Main content -->
  <div
    class=" absolute top-[112px] left-2 rounded-[20px] rounded-t-none rounded-r-[20px] h-[350px] w-[350px] bg-white drop-shadow-2xl"
  >
    <div class=" absolute top-14 p-2">
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
          <div class=" relative rounded-md">
            <img
              class=" absolute rounded-md"
              src={content.nftsList[0]}
              alt=""
            />
            <div
              class=" absolute  text-white font-base text-sm  bg-black h-full w-full opacity-80 rounded-md p-2"
            >
              <p>{content.size}</p>
              <p>items</p>
            </div>
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
  <!-- PfP image -->
  <div
    class=" absolute w-24 h-24 bg-white rounded-xl top-[74px] left-5 drop-shadow-2xl"
  >
    <div class=" relative p-0.5 flex flex-col">
      <img class="rounded-xl" src={content.pfp} alt="" />
    </div>
  </div>
</div>

<style>
  .gradient-border {
    border: 2px 1em transparent;
    border-radius: 20px;
    background-image: linear-gradient(white, white),
      linear-gradient(to right bottom, #74bcff, #ffb930);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
</style>
