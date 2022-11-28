import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { get } from "svelte/store";

import {
  ethersProvider,
  address,
  signer,
  web3modalObj,
  chainId,
  openWallet,
} from "$lib/store";
import networkConfig from "$lib/constants/networkConfig";
import { setWethBalance } from "$lib/utils/balance";

async function setAccount(provider) {
  if (!provider.isMetaMask) {
    openWallet.set(true);
  } else {
    openWallet.set(false);
  }

  ethersProvider.set(new ethers.providers.Web3Provider(provider));
  signer.set(get(ethersProvider).getSigner());
  let addressString = await get(signer).getAddress();
  address.set(addressString);

  await setWethBalance()

  try {
    const network = await get(ethersProvider).getNetwork();
    chainId.set(network.chainId);
  } catch (err) {
    console.log(err);
  }

  provider.on("chainChanged", () => {
    window.location.reload();
  });

  provider.on("accountsChanged", async () => {
    await setAccount(provider);
  });
}

export async function handleConnect() {
  // @ts-ignore
  if (window && window.WalletConnectProvider) {

    // @ts-ignore
    let WalletConnectProvider = window.WalletConnectProvider.default;
    const providerOptions = {
      walletconnect: {
        // @ts-ignore
        package: WalletConnectProvider, // required
        options: {
          infuraId: "eaHOIpmkv7RpL3B9Ujk4Pf9ZzxHlUcQi", // required
        },
      },
    };

    const web3Modal = new Web3Modal({
      network: networkConfig[1].name,
      cacheProvider: true,
      providerOptions,
    });

    web3modalObj.set(web3Modal);

    if (web3Modal.cachedProvider) {
      const provider = await web3Modal.connect();
      await setAccount(provider);
    }

    await checkIfChainRinkeby();
    
    console.log('window.ethereum.chainId', window.ethereum.chainId);
    
    return true;
  }
}

export async function connectWallet() {
  try {
    console.log("trying to connect wallet");
    
    const provider = await get(web3modalObj).connect();
    await setAccount(provider);
  } catch (switchError) {
    // if (switchError.code === 4902) {
    //   try {
    //     await get(ethersProvider).provider.request({
    //       method: "wallet_addEthereumChain",
    //       params: [{ chainId: networkConfig[1].chainHex }],
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    console.log("Connecting Wallet issue", switchError);
    
		if (window.ethereum && window.ethereum.chainId !== networkConfig[1].chainHex) {
			try {
				await window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: networkConfig[1].chainHex }] // chainId must be in hexadecimal numbers
				});
				const provider_ = await get(web3modalObj).connect();
				await setAccount(provider_);
			} catch (e) {
				console.log('err', e);
			}
		}
  }
}

export function disconnectWallet() {
  ethersProvider.set(undefined);
  signer.set(undefined);
  address.set("");
  const web3Modal = get(web3modalObj);
  web3Modal.clearCachedProvider();
  web3modalObj.set(web3Modal);
}

async function checkIfChainRinkeby() {
  if(window.ethereum.chainId !== networkConfig[1].chainHex) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkConfig[1].chainHex }] // chainId must be in hexadecimal numbers
      });
      const provider_ = await get(web3modalObj).connect();
      await setAccount(provider_);
    } catch (e) {
      console.log('err', e);
    }
  }
}
