import React, { useEffect } from 'react';
const {ethers} = require('ethers');


function App() {

useEffect(() => {
  const writeContract = async () => {
    const walletAddress ='0x17092903bbb029f31623048615e8a93ea8dc41d9'
    const walletAbi = [
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
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts')
    const signer = provider.getSigner()
    const contract = new ethers.Contract(walletAddress, walletAbi, signer)
    await contract.setValue(100)
  }
  writeContract()
  
  
}, [])

  return (
    <div className="App">
      <h1>{} </h1>
    </div>
  );
}

export default App;
