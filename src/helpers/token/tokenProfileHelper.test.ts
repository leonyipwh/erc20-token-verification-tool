import { ethers } from 'ethers';
import { fetchProfile } from './tokenProfileHelper';

describe('tokenProfileHelper', () => {
  test('fetchProfile()', async () => {
    const address = '0x4469B89729E28561903CfA84246D68e6a0b57048';
    const providerMock = new ethers.providers.InfuraProvider('mainnet', '123456789');
    // @ts-ignore
    const contractSpy = jest.spyOn(ethers, 'Contract').mockImplementation(() => {
      return {
        name: () => Promise.resolve('OSLToken'),
        symbol: () => Promise.resolve('OSL'),
        decimals: () => Promise.resolve('18'),
        totalSupply: () => Promise.resolve('1000000000000000000')
      };
    });
    const result = await fetchProfile(address, [], providerMock);

    expect(contractSpy).toHaveBeenCalled();
    expect(result).toStrictEqual([
      { label: 'Name', value: 'OSLToken' },
      { label: 'Symbol', value: 'OSL' },
      { label: 'Decimals', value: '18' },
      { label: 'Total Supply', value: '1' }
    ]);
  });
});
