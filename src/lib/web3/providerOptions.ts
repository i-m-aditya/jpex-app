
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import * as UAuthWeb3Modal from '@uauth/web3modal'
// import UAuthSPA from '@uauth/js'
// import { uauthOptions } from './uOathOptions';

export const providerOptions = {
  
  // @ts-ignore
  walletconnect: {
    // @ts-ignore
    package: window.WalletConnectProvider.default, // required
    options: {
      infuraId: "eaHOIpmkv7RpL3B9Ujk4Pf9ZzxHlUcQi" // required
    }
  },
  // 'custom-uauth': {
  //   // The UI Assets
  //   display: UAuthWeb3Modal.display,

  //   // The Connector
  //   connector: UAuthWeb3Modal.connector,

  //   // The SPA libary
  //   package: UAuthSPA,

  //   // The SPA libary options
  //   options: uauthOptions,
  //   },

  // walletlink: {
  //   package: CoinbaseWalletSDK, // Required
  //   options: {
  //     appName: "Web 3 Modal Demo", // Required
  //     infuraId: "eaHOIpmkv7RpL3B9Ujk4Pf9ZzxHlUcQi" // Required unless you provide a JSON RPC url; see `rpc` below
  //   }
  // },
  
};
