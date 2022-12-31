
const { ethers } = require("ethers")
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/6ea493d8d456483989c84b452369c238`)

const queryBlockchain = async ()  => {
    const block = await provider.getBlockNumber()
    console.log(block)
    const balance = await provider.getBalance('0x1324c0fb6f45f3bf1aaa1fcdc08f17431f53ded7')
    console.log(balance);
    const etherBal = ethers.utils.formatEther(balance)
    console.log(etherBal)
    const weiBal = ethers.utils.parseEther(etherBal)
    console.log(weiBal);
}
queryBlockchain()