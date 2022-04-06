const VOTE_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name_",
				type: "string",
			},
			{
				internalType: "string",
				name: "symbol_",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "totalSupply_",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "rewardAddr_",
				type: "address",
			},
			{
				internalType: "address",
				name: "marketingWalletAddr_",
				type: "address",
			},
			{
				internalType: "address",
				name: "serviceAddr_",
				type: "address",
			},
			{
				internalType: "uint256[4]",
				name: "buyFeeSetting_",
				type: "uint256[4]",
			},
			{
				internalType: "uint256[4]",
				name: "sellFeeSetting_",
				type: "uint256[4]",
			},
			{
				internalType: "uint256",
				name: "inviterFee_",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "tokenBalanceForReward_",
				type: "uint256",
			},
		],
		stateMutability: "payable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "isExcluded",
				type: "bool",
			},
		],
		name: "ExcludeFromFees",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address[]",
				name: "accounts",
				type: "address[]",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "isExcluded",
				type: "bool",
			},
		],
		name: "ExcludeMultipleAccountsFromFees",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "newValue",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "oldValue",
				type: "uint256",
			},
		],
		name: "GasForProcessingUpdated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "newLiquidityWallet",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "oldLiquidityWallet",
				type: "address",
			},
		],
		name: "LiquidityWalletUpdated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "iterations",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "claims",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "lastProcessedIndex",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "bool",
				name: "automatic",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "gas",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "processor",
				type: "address",
			},
		],
		name: "ProcessedDividendTracker",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokensSwapped",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "SendDividends",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "pair",
				type: "address",
			},
			{
				indexed: true,
				internalType: "bool",
				name: "value",
				type: "bool",
			},
		],
		name: "SetAutomatedMarketMakerPair",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokensSwapped",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "ethReceived",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokensIntoLiqudity",
				type: "uint256",
			},
		],
		name: "SwapAndLiquify",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "newAddress",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "oldAddress",
				type: "address",
			},
		],
		name: "UpdateDividendTracker",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "newAddress",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "oldAddress",
				type: "address",
			},
		],
		name: "UpdateUniswapV2Router",
		type: "event",
	},
	{
		inputs: [],
		name: "AmountLiquidityFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "AmountMarketingFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "AmountTokenRewardsFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "_isbadguy",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "_marketingWalletAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "automatedMarketMakerPairs",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "bool",
				name: "value",
				type: "bool",
			},
		],
		name: "badguyAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "buyDeadFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "buyLiquidityFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "buyMarketingFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "buyTokenRewardsFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "claim",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "deadWallet",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256",
			},
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "dividendTokenBalanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "dividendTracker",
		outputs: [
			{
				internalType: "contract TokenDividendTracker",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "excludeFromDividends",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "bool",
				name: "excluded",
				type: "bool",
			},
		],
		name: "excludeFromFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "accounts",
				type: "address[]",
			},
			{
				internalType: "bool",
				name: "excluded",
				type: "bool",
			},
		],
		name: "excludeMultipleAccountsFromFees",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "gasForProcessing",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "getAccountDividendsInfo",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "int256",
				name: "",
				type: "int256",
			},
			{
				internalType: "int256",
				name: "",
				type: "int256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "getAccountDividendsInfoAtIndex",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "int256",
				name: "",
				type: "int256",
			},
			{
				internalType: "int256",
				name: "",
				type: "int256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getClaimWait",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getLastProcessedIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getNumberOfDividendTokenHolders",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTime",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTotalDividendsDistributed",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getniceguyTime",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256",
			},
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "isExcludedFromDividends",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "isExcludedFromFees",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "time",
				type: "uint256",
			},
		],
		name: "lock",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "niceguy",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "gas",
				type: "uint256",
			},
		],
		name: "processDividendTracker",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "rewardToken",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "sellDeadFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "sellLiquidityFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "sellMarketingFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "sellTokenRewardsFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "pair",
				type: "address",
			},
			{
				internalType: "bool",
				name: "value",
				type: "bool",
			},
		],
		name: "setAutomatedMarketMakerPair",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setBuyDeadFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setBuyLiquidityFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setBuyMarketingFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setBuyTokenRewardsFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "setDeadWallet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address payable",
				name: "wallet",
				type: "address",
			},
		],
		name: "setMarketingWallet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setSellDeadFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setSellLiquidityFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setSellMarketingFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setSellTokenRewardsFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_loved",
				type: "bool",
			},
		],
		name: "setSwapAndLiquifyloved",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "setSwapTokensAtAmount",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "swapAndLiquifyloved",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "swapManual",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "swapTokensAtAmount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "uniswapV2Pair",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "uniswapV2Router",
		outputs: [
			{
				internalType: "contract IUniswapV2Router02",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "claimWait",
				type: "uint256",
			},
		],
		name: "updateClaimWait",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "newValue",
				type: "uint256",
			},
		],
		name: "updateGasForProcessing",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "val",
				type: "uint256",
			},
		],
		name: "updateMinimumTokenBalanceForDividends",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newAddress",
				type: "address",
			},
		],
		name: "updateUniswapV2Router",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "withdrawableDividendOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		stateMutability: "payable",
		type: "receive",
	},
];

var VOTE_ADDR = "";
$(function () {
	init();
	//输入框如果是class就是 ".class名字" ID “#id名字”
	$("#qianbaodizhi").blur(function () {
		VOTE_ADDR = $(this).val();
		console.log("@", VOTE_ADDR);
	});
});

//   合约地址

function getWeb3Provider() {
	if (!window.web3Provider) {
		if (!window.ethereum) {
			console.error("there is no web3 provider.");
			return null;
		}
		window.web3Provider = new ethers.providers.Web3Provider(
			window.ethereum,
			"any"
		);
	}
	return window.web3Provider;
}

function showAlert(title, message) {
	let m = $("#alertModal");
	m.find(".x-title").text(title);
	m.find(".x-message").text(message);
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	myModal.show();
}

function showInfo(title, message) {
	let m = $("#infoModal");
	m.find(".x-title").text(title);
	m.find(".x-message").text(message);
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	myModal.show();
}

function showLoading(title, message) {
	let m = $("#loadingModal");
	let myModal = new bootstrap.Modal(m.get(0), {
		backdrop: "static",
		keyboard: false,
	});
	let obj = {
		setTitle: t => {
			m.find(".x-title").text(t);
		},
		setMessage: t => {
			m.find(".x-message").text(t);
		},
		close: () => {
			setTimeout(function () {
				myModal.hide();
			}, 500);
		},
	};
	obj.setTitle(title);
	obj.setMessage(message);
	myModal.show();
	return obj;
}

function translateError(err) {
	window.err = err;
	if (typeof err === "string") {
		return err;
	}
	if (err.error && err.error.code && err.error.message) {
		return `Error (${err.error.code}): ${err.error.message}`;
	}
	if (err.code && err.message) {
		return `Error (${err.code}): ${err.message}`;
	}
	return err.message || err.toString();
}

function init() {
	console.log("init vue...");
	window.vm = new Vue({
		el: "#vm",
		data: {
			account: null,
			chainId: 0,
			proposal: 0,
			mairu: "", //绑定的输入框值（定义漏了）  记得加
			liudong: "", //绑定的输入框值 （定义漏了） 记得加
			shijian: "",
		},
		computed: {
			ready: function () {
				return this.account && this.chainId === 97;
			},
			wrongNetwork: function () {
				return this.account && this.chainId !== 97;
			},
		},
		methods: {
			gotoScanUrl: function () {
				window.open("https://ropsten.etherscan.io/address/" + this.account);
			},
			// 买入分红占比调用
			excludeFromFees: async function () {
				let loading = showLoading("准备", "等待中...");
				try {
					if (!this.ready) {
						throw "请先连接钱包!";
					}
					loading.setMessage("请在钱包确认交易");
					// TODO: 检查MetaMask连接信息
					// 根据地址和ABI创建一个Contract对象:
					let contract = new ethers.Contract(
						VOTE_ADDR,
						VOTE_ABI,
						window.getWeb3Provider().getSigner()
					);
					// 调用vote()函数，并返回一个tx对象:
					// 也需要修改 let tx = await contract.方法名称(this.huangbin 按钮);
					let tx = await contract.excludeFromFees(this.mairu, "true");
					loading.setMessage("处理中请等待...");
					// 等待tx落块，并至少1个区块确认:
					await tx.wait(1);
					showInfo("成功", "修改信息成功");
				} catch (e) {
					showAlert("错误", translateError(e));
				}
				loading.close();
			},
			// 第一个按钮结束
			// 买入流动性开始
			setBuyTokenRewardsFee: async function () {
				let loading = showLoading("准备", "等待中...");
				try {
					if (!this.ready) {
						throw "请先连接钱包!";
					}
					loading.setMessage("请在钱包确认交易");
					// TODO: 检查MetaMask连接信息
					// 根据地址和ABI创建一个Contract对象:
					let contract = new ethers.Contract(
						VOTE_ADDR,
						VOTE_ABI,
						window.getWeb3Provider().getSigner()
					);
					// 调用vote()函数，并返回一个tx对象:
					// 也需要修改 let tx = await contract.方法名称(this.huangbin 按钮);
					let tx = await contract.setBuyTokenRewardsFee(this.mairu);
					loading.setMessage("处理中请等待...");
					// 等待tx落块，并至少1个区块确认:
					await tx.wait(1);
					showInfo("成功", "修改信息成功");
				} catch (e) {
					showAlert("错误", translateError(e));
				}
				loading.close();
			},
			// 买入流动性结束
			// 买入流动性开始
			setBuyDeadFee: async function () {
				let loading = showLoading("准备", "等待中...");
				try {
					if (!this.ready) {
						throw "请先连接钱包!";
					}
					loading.setMessage("请在钱包确认交易");
					// TODO: 检查MetaMask连接信息
					// 根据地址和ABI创建一个Contract对象:
					let contract = new ethers.Contract(
						VOTE_ADDR,
						VOTE_ABI,
						window.getWeb3Provider().getSigner()
					);
					// 调用vote()函数，并返回一个tx对象:
					// 也需要修改 let tx = await contract.方法名称(this.huangbin 按钮);
					let tx = await contract.setBuyDeadFee(this.shijian);
					loading.setMessage("处理中请等待...");
					// 等待tx落块，并至少1个区块确认:
					await tx.wait(1);
					showInfo("成功", "修改信息成功");
				} catch (e) {
					showAlert("错误", translateError(e));
				}
				loading.close();
			},
			// 买入流动性结束
			accountChanged: function (accounts) {
				console.log(
					"wallet account changed:",
					accounts.length === 0 ? null : accounts[0]
				);
				if (accounts.length === 0) {
					this.disconnected();
				} else {
					this.account = accounts[0];
					document.cookie = "__account__=" + this.account + ";max-age=1296000";
				}
			},
			disconnected: async function () {
				console.warn("wallet disconnected.");
				this.account = null;
			},
			chainChanged: function (chainId) {
				console.log(
					"wallet chainId changed: " + chainId + " = " + parseInt(chainId, 16)
				);
				this.chainId = parseInt(chainId, 16);
			},
			connectWallet: async function () {
				console.log("try connect wallet...");
				if (window.getWeb3Provider() === null) {
					console.error("there is no web3 provider.");
					return false;
				}
				try {
					this.accountChanged(
						await window.ethereum.request({
							method: "eth_requestAccounts",
						})
					);
					this.chainChanged(
						await window.ethereum.request({
							method: "eth_chainId",
						})
					);
					window.ethereum.on("disconnect", this.disconnected);
					window.ethereum.on("accountsChanged", this.accountChanged);
					window.ethereum.on("chainChanged", this.chainChanged);
				} catch (e) {
					console.error("could not get a wallet connection.", e);
					return false;
				}
				console.log("wallet connected.");
				return true;
			},
		},
	});
}
