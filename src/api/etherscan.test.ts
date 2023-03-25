import fetchMock from 'jest-fetch-mock';
import { getAbi } from './etherscan';

describe('etherscan api', () => {
  beforeEach(() => {
    fetchMock.doMock();
  });

  it('should return abi', async () => {
    const abiMock = [
      { constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }] }
    ];
    const abiResult = JSON.stringify(abiMock);
    const responseMock = {
      status: '1',
      message: 'OK',
      result: abiResult
    };
    fetchMock.mockResponse(JSON.stringify(responseMock));
    const networkMock = {
      name: 'rinkeby',
      subdomain: 'api-rinkeby'
    };
    const { status, result } = await getAbi(
      networkMock,
      '0x4469B89729E28561903CfA84246D68e6a0b57048'
    );
    expect(status).toBe(responseMock.status);
    expect(result).toStrictEqual(abiMock);
  });
});
