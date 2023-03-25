import { ContractInterface, ethers } from 'ethers';
import { InfuraProvider } from '@ethersproject/providers';
import { IProfileData } from '../../types/tokenVerification';

export const numWithSeparator = (value: number) =>
  value.toLocaleString(undefined, { maximumFractionDigits: 18 });

export const fetchProfile = async (
  address: string,
  abi: ContractInterface,
  provider: InfuraProvider
): Promise<IProfileData[]> => {
  const { name, symbol, decimals, totalSupply } = new ethers.Contract(address, abi, provider);

  const methodCallPromise = async (method: () => Promise<Response>): Promise<any> => {
    return typeof method === 'function' ? method() : Promise.reject(new Error('not found'));
  };

  const [cName, cSymbol, cDecimals, cTotalSupply] = await Promise.allSettled([
    methodCallPromise(name),
    methodCallPromise(symbol),
    methodCallPromise(decimals),
    methodCallPromise(totalSupply)
  ]);

  const formatDecimals =
    cDecimals.status === 'fulfilled' ? ethers.utils.formatUnits(cDecimals.value, 'wei') : undefined;

  const formatTotalSupply =
    cTotalSupply.status === 'fulfilled'
      ? parseFloat(ethers.utils.formatUnits(cTotalSupply.value, formatDecimals))
      : undefined;

  return [
    {
      label: 'Name',
      value: cName.status === 'fulfilled' ? cName.value : undefined
    },
    {
      label: 'Symbol',
      value: cSymbol.status === 'fulfilled' ? cSymbol.value : undefined
    },
    {
      label: 'Decimals',
      value: formatDecimals
    },
    {
      label: 'Total Supply',
      value: formatTotalSupply ? numWithSeparator(formatTotalSupply) : undefined
    }
  ];
};
