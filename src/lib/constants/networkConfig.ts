const networkConfig = [
	{
		chainId: 1,
		chainHex: '0x1',
		name: 'Ethereum Mainnet',
		nativeCurrency: {
			name: 'Ethereum',
			symbol: 'ETH',
			decimals: 18
		},
		rpcUrls: ['https://mainnet.infura.io/v3/'],
		blockExplorerUrls: ['https://etherscan.io/']
	},
	{
		chainId: 4,
		chainHex: '0x4',
		name: 'Rinkeby Testnet',
		nativeCurrency: {
			name: 'Ethereum',
			symbol: 'ETH',
			decimals: 18
		},
		rpcUrls: ['https://rinkeby.infura.io/v3/'],
		blockExplorerUrls: ['https://rinkeby.etherscan.io/']
	}
]
	

export default networkConfig;