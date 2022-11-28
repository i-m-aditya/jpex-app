const abi = {
	erc20: [
		'function approve(address, uint)',
		'function allowance(address owner, address spender) view returns (uint)',
		'function balanceOf(address) view returns (uint)'
	],
	erc721: [
		'function ownerOf(uint256) view returns (address)',
		'function balanceOf(address )  view returns (uint256 )',
		'function totalSupply() external view returns (uint256)',
		'function approve(address, uint256) external'
	],

	nftOptionBuyerVault: [
		{
			inputs: [
				{
					internalType: 'string',
					name: 'nft_',
					type: 'string'
				}
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'withdrawAmount',
					type: 'uint256'
				}
			],
			name: 'CompleteWithdraw',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'depositAmount',
					type: 'uint256'
				}
			],
			name: 'Deposited',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'earnings',
					type: 'uint256'
				}
			],
			name: 'EarningsClaimed',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'epoch',
					type: 'uint256'
				}
			],
			name: 'NewEpoch',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address'
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'withdrawAmount',
					type: 'uint256'
				}
			],
			name: 'PartialWithdraw',
			type: 'event'
		},
		{
			inputs: [],
			name: 'BASE_UNIT',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'NFT_OPTIONS_SELLER_VAULT_ADDRESS',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'WETH',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'authorize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			name: 'authorized',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'strike_',
					type: 'uint256'
				}
			],
			name: 'claimEarningsForStrike',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'currentEpoch',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'deauthorize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'depositAmount',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: 'strike_',
					type: 'uint256'
				}
			],
			name: 'depositInOptionBuyersVault',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			name: 'epochExpiry',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			name: 'epochState',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			name: 'epochStrikes',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			name: 'epochStrikesToPremium',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'expireEpoch',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: 'strike_',
					type: 'uint256'
				}
			],
			name: 'getByteEncodedUserAndStrike',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32'
				}
			],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getEpochStrikes',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address'
				},
				{
					internalType: 'uint256',
					name: 'strike_',
					type: 'uint256'
				}
			],
			name: 'getUserDepositsForStrike',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'isAuthorized',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'nft',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'optionType',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'provideLiquidityToOptionSellersVault',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'state',
					type: 'uint256'
				}
			],
			name: 'setEpochState',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'nftOptionSellerVaultAddr',
					type: 'address'
				}
			],
			name: 'setOptionWriterVaultAddress',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'setOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'strike_',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: 'earnings',
					type: 'uint256'
				}
			],
			name: 'setTotalEarningsForStrike',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: 'strikes',
					type: 'uint256[]'
				},
				{
					internalType: 'uint256[]',
					name: 'premiums',
					type: 'uint256[]'
				},
				{
					internalType: 'uint256',
					name: 'expiry',
					type: 'uint256'
				}
			],
			name: 'startNewEpochWithExpiry',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			name: 'totalDepositInStrike',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			name: 'totalEarningsForStrike',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				},
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32'
				}
			],
			name: 'userDepositInStrike',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'withdrawAmount',
					type: 'uint256'
				},
				{
					internalType: 'uint256',
					name: 'strike_',
					type: 'uint256'
				}
			],
			name: 'withdrawFromOptionBuyersVault',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],
	nftOptionBuyerVaultFactory: [
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'authorize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			name: 'authorized',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'deauthorize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'nft',
					type: 'string'
				}
			],
			name: 'deployVault',
			outputs: [
				{
					internalType: 'contract NftOptionBuyersVault',
					name: 'vault',
					type: 'address'
				}
			],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'nft',
					type: 'string'
				}
			],
			name: 'getVaultFromOptionParams',
			outputs: [
				{
					internalType: 'contract NftOptionBuyersVault',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'isAuthorized',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'contract NftOptionBuyersVault',
					name: 'vault',
					type: 'address'
				}
			],
			name: 'isVaultDeployed',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'who',
					type: 'address'
				}
			],
			name: 'setOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],

	nftOptionSellerVault: [
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "nft_",
			  "type": "string"
			},
			{
			  "internalType": "address",
			  "name": "contractAddress_",
			  "type": "address"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "epoch",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "settlementPrices",
			  "type": "uint256"
			}
		  ],
		  "name": "EpochExpired",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "epoch",
			  "type": "uint256"
			}
		  ],
		  "name": "EpochUpdated",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "epoch",
			  "type": "uint256"
			},
			{
			  "indexed": true,
			  "internalType": "uint256[]",
			  "name": "strikes",
			  "type": "uint256[]"
			},
			{
			  "indexed": true,
			  "internalType": "uint256[]",
			  "name": "premiums",
			  "type": "uint256[]"
			}
		  ],
		  "name": "PremiumUpdatedForCurrentEpoch",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "epoch",
			  "type": "uint256"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "strike",
			  "type": "uint256"
			}
		  ],
		  "name": "Settled",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "settlementPrice",
			  "type": "uint256"
			}
		  ],
		  "name": "SettlementPriceUpdated",
		  "type": "event"
		},
		{
		  "inputs": [],
		  "name": "BASE_UNIT",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "ONE",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "PRE_LIQUIDATION_WINDOW",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "WETH",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "authorize",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "authorized",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "bootstrap",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "strike_",
			  "type": "uint256"
			}
		  ],
		  "name": "calculatePNL",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "contractAddress",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "currentEpoch",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "deauthorize",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256[]",
			  "name": "tokenIds",
			  "type": "uint256[]"
			},
			{
			  "internalType": "uint256[]",
			  "name": "strikes",
			  "type": "uint256[]"
			}
		  ],
		  "name": "depositMultipleNftAndMintOptions",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "strike_",
			  "type": "uint256"
			}
		  ],
		  "name": "depositNftAndMintOption",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			}
		  ],
		  "name": "depositWethForStrikeToReclaimNFT",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "epochExpiry",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "epochSettlement",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "epochSettlementPrice",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "epochStrikeTokens",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "epochStrikes",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "epochStrikesToPremium",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "erc20Implementation",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "settlementPrice",
			  "type": "uint256"
			}
		  ],
		  "name": "expireEpoch",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "strike_",
			  "type": "uint256"
			}
		  ],
		  "name": "getEpochTokensName",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "isAuthorized",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "user",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "isNftClaimable",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "manualLiquidationAccount",
			  "type": "address"
			}
		  ],
		  "name": "liquidateNFT",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "nft",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "bytes",
			  "name": "",
			  "type": "bytes"
			}
		  ],
		  "name": "onERC721Received",
		  "outputs": [
			{
			  "internalType": "bytes4",
			  "name": "",
			  "type": "bytes4"
			}
		  ],
		  "stateMutability": "pure",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "owner",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "rescue",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "setOwner",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256[]",
			  "name": "strikes",
			  "type": "uint256[]"
			},
			{
			  "internalType": "uint256[]",
			  "name": "premiums",
			  "type": "uint256[]"
			}
		  ],
		  "name": "setPremiumsForStrikes",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256[]",
			  "name": "strikes",
			  "type": "uint256[]"
			}
		  ],
		  "name": "setStrikes",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "strike_",
			  "type": "uint256"
			},
			{
			  "internalType": "address",
			  "name": "buyersVaultAddress",
			  "type": "address"
			}
		  ],
		  "name": "settle",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "expiry",
			  "type": "uint256"
			}
		  ],
		  "name": "startNewEpochWithExpiry",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "totalEpochNftDepositsForStrike",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "userEpochNFTDepositsForStrike",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes32",
			  "name": "",
			  "type": "bytes32"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "userEpochNftClaimableStatus",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "userWethBalance",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "usersForThatEpochStrike",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "user",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "strike_",
			  "type": "uint256"
			}
		  ],
		  "name": "wethRequiredToReclaimNFT",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "withdrawAllClaimableNFTs",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		}
	  ],

	nftOptionSellerVaultFactory: [
		{
		  "inputs": [],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
		},
		{
		  "inputs": [],
		  "name": "OPTION_WRITER_SALT",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "authorize",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "authorized",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "deauthorize",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "nft",
			  "type": "string"
			},
			{
			  "internalType": "address",
			  "name": "contractAddress",
			  "type": "address"
			}
		  ],
		  "name": "deployNftOptionVault",
		  "outputs": [
			{
			  "internalType": "contract NftOptionSellersVault",
			  "name": "vault",
			  "type": "address"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "nft",
			  "type": "string"
			},
			{
			  "internalType": "address",
			  "name": "contractAddress",
			  "type": "address"
			}
		  ],
		  "name": "getVaultFromOptionParams",
		  "outputs": [
			{
			  "internalType": "contract NftOptionSellersVault",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "isAuthorized",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "contract NftOptionSellersVault",
			  "name": "vault",
			  "type": "address"
			}
		  ],
		  "name": "isVaultDeployed",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "owner",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "who",
			  "type": "address"
			}
		  ],
		  "name": "setOwner",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		}
	  ]
};
export default abi;
