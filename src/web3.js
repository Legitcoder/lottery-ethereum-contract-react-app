import Web3 from 'web3';

const options = {
    transactionConfirmationBlocks: 1
}
 
const getProvider = async () => {
  await window.web3.currentProvider.enable(); // request authentication
};
getProvider();
 
const web3 = new Web3(window.web3.currentProvider, null, options);
 
export default web3;