import { ethers } from 'ethers';

export const initProvider = (network: string) => {
  return new ethers.providers.InfuraProvider(network, process.env.VITE_INFURA_API_KEY);
};
