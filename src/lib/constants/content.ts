export default interface NftData {
	name: string;
	description: string;
	size: string;
	oraclePrice: string;
	expiry: string;
	currentDeposit: string;
	maxCapacity: string;
}

export const collections = [
	{
		name: 'Bored Ape Yacht Club',
		description:
			'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
		size: '10k',
		oraclePrice: '139',
		expiry: '30th April',
		currentDeposits: '25',
		maxCapacity: '100',
		pfp: 'bayc/bayc-pfp.png',
		cover: 'bayc/bayc-bg.png',
		nftsList: ['/bayc/bayc-1.png', '/bayc/bayc-2.png', '/bayc/bayc-3.png', '/bayc/bayc-4.png']
	},
	{
		name: 'Doodle',
		description:
			'Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000.',
		size: '10k',
		oraclePrice: '110',
		expiry: '20th April',
		currentDeposits: '25',
		maxCapacity: '100',
		pfp: 'doodles/doodle-pfp.png',
		cover: 'doodles/doodle-bg.png',
		nftsList: [
			'/doodles/doodles-1.png',
			'/doodles/doodles-2.png',
			'/doodles/doodles-3.png',
			'/doodles/doodles-4.png'
		]
	},
	{
		name: 'Cryptopunks',
		description:
			'Cryptopunks have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.',
		size: '10k',
		oraclePrice: '110',
		expiry: '20th April',
		currentDeposits: '25',
		maxCapacity: '100',
		pfp: 'punks/punks-pfp.png',
		cover: 'punks/punks-bg1.png',
		nftsList: [
			'/punks/punks-1.png',
			'/punks/punks-2.png',
			'/punks/punks-3.png',
			'/punks/punks-4.png'
		]
	}
];

export const vaultsData: any = {
	punks: {
		nftLocked: [
			{
				token: '1',
				img: '/punks/punks-1.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/punks/punks-2.png',
				address: '0xf3....12fde'
			},
			{
				img: '/punks/punks-3.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/punks/punks-4.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/punks/punks-1.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/punks/punks-2.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/punks/punks-3.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/punks/punks-4.png',
				address: '0xf3....12fde'
			}
		],
		recentTransactions: [
			{
				token: '1',
				img: '/punks/punks-4.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Punks X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/punks/punks-1.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Punks X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/punks/punks-2.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Punks X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/punks/punks-3.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Punks X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			}
		]
	},
	bayc: {
		nftLocked: [
			{
				token: '1',
				img: '/bayc/bayc-1.png',
				address: '0xf3....12fde'
			},
			{
				token: '2',
				img: '/bayc/bayc-2.png',
				address: '0xf3....12fde'
			},
			{
				token: '3',
				img: '/bayc/bayc-3.png',
				address: '0xf3....12fde'
			},
			{
				token: '4',
				img: '/bayc/bayc-4.png',
				address: '0xf3....12fde'
			},
			{
				token: '5',
				img: '/bayc/bayc-1.png',
				address: '0xf3....12fde'
			},
			{
				token: '6',
				img: '/bayc/bayc-2.png',
				address: '0xf3....12fde'
			},
			{
				token: '7',
				img: '/bayc/bayc-3.png',
				address: '0xf3....12fde'
			},
			{
				token: '8',
				img: '/bayc/bayc-4.png',
				address: '0xf3....12fde'
			}
		],
		recentTransactions: [
			{
				token: '1',
				img: '/bayc/bayc-4.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Bayc-Call-135ETH-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/bayc/bayc-1.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Bayc-Call-135ETH-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/bayc/bayc-2.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Bayc-Call-135ETH-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/bayc/bayc-3.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Bayc-Call-135ETH-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			}
		]
	},
	doodles: {
		nftLocked: [
			{
				token: '1',
				img: '/doodles/doodles-1.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-2.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-3.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-4.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-1.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-2.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-3.png',
				address: '0xf3....12fde'
			},
			{
				token: '1',
				img: '/doodles/doodles-4.png',
				address: '0xf3....12fde'
			}
		],
		recentTransactions: [
			{
				token: '1',
				img: '/doodles/doodles-4.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Doodles X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/doodles/doodles-1.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Doodles X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/doodles/doodles-2.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Doodles X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			},
			{
				token: '1',
				img: '/doodles/doodles-3.png',
				type: 'Deposit',
				time: '4 days ago',
				option: 'Doodles X-150222',
				strike: '21.5',
				quantity: '2',
				premiumInUSD: '11500',
				premiumInWeth: '3.42'
			}
		]
	}
};
