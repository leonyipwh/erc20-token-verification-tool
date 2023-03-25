import { INetwork } from '../types/tokenVerification';
import queryString from 'query-string';
import { ContractInterface } from 'ethers';

interface IEtherscanBase {
  action: string;
  module: string;
  apikey?: string;
}

interface IFetchAbiParam extends IEtherscanBase {
  address: string;
}

interface IResult {
  status: string;
  message: string;
  result: ContractInterface;
}

const parseEtherscanURL = (network: INetwork) => {
  const { subdomain } = network;
  return `https://${subdomain}.etherscan.io/api`;
};

export const getAbi = async (network: INetwork, address: string): Promise<IResult> => {
  const params: IFetchAbiParam = {
    action: 'getabi',
    module: 'contract',
    apikey: process.env.VITE_ETHERSCAN_API_KEY,
    address
  };

  const paramsString = queryString.stringify(params);
  const response = await fetch(`${parseEtherscanURL(network)}?${paramsString}`);
  const data = await response.json();
  const { status, result } = data;
  if (status === '0') {
    return Promise.reject(data);
  }
  return { ...data, result: JSON.parse(result) };
};
