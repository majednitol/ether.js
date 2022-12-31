const ethers = require("ethers")
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/6ea493d8d456483989c84b452369c238`)
const walletAddress = '0x17092903bbb029f31623048615e8a93ea8dc41d9'
const walletAbi= [
	{
		"inputs": [],
		"name": "sendEthContact",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "BalanceContact",
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
				"name": "_user",
				"type": "address"
			}
		],
		"name": "BalanceUser",
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
		"name": "getValue",
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
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractIntreaction = async () => {
    const walletContract = new ethers.Contract(walletAddress,walletAbi, provider)
    const contractName = await walletContract.name()
    console.log(contractName);
    const num = await walletContract.getValue()
     console.log(String(num));
    const contractBalance = await walletContract.BalanceContact()
    const contractBalanceEther = ethers.utils.formatEther(contractBalance)
    console.log(contractBalanceEther);
    const userBalance = await walletContract.BalanceUser('0xA07cDb8d3E91e30606D5604284295A19102D531C')
    const userBalanceEther = ethers.utils.formatEther(userBalance)

    console.log(userBalanceEther);
    


}
contractIntreaction()