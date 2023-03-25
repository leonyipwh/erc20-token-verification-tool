import { getTokenLogs, getTxReceipt } from './txHelper';
import { BigNumber, ethers } from 'ethers';

jest.mock('ethers');

describe('txHelper', () => {
  test('getTokenLogs()', async () => {
    const logNum = 50;
    const address = '0x4469B89729E28561903CfA84246D68e6a0b57048';
    const providerMock = new ethers.providers.InfuraProvider('mainnet', '123456789');
    const getBlockNumberSpy = jest
      .spyOn(providerMock, 'getBlockNumber')
      .mockImplementation(() => Promise.resolve(1));
    const getLogsSpy = jest
      .spyOn(providerMock, 'getLogs')
      .mockImplementation(() => Promise.resolve(new Array(logNum)));
    const result = await getTokenLogs(providerMock, address);

    expect(getBlockNumberSpy).toHaveBeenCalled();
    expect(getLogsSpy).toHaveBeenCalled();
    expect(result.length).toBe(logNum);
  });

  test('getTxReceipt()', async () => {
    const providerMock = new ethers.providers.InfuraProvider('mainnet', '123456789');
    const txReceiptMock = {
      to: 'to',
      from: 'from',
      contractAddress: 'contractAddress',
      transactionIndex: 123,
      gasUsed: new BigNumber(null, '0x000'),
      logsBloom: 'logsBloom',
      blockHash: 'blockHash',
      transactionHash: 'transactionHash',
      logs: [],
      blockNumber: 123,
      confirmations: 123,
      cumulativeGasUsed: new BigNumber(null, '0x000'),
      effectiveGasPrice: new BigNumber(null, '0x000'),
      byzantium: true,
      type: 123
    };
    const getTransactionReceiptSpy = jest
      .spyOn(providerMock, 'getTransactionReceipt')
      .mockImplementation(() => Promise.resolve(txReceiptMock));
    const result = await getTxReceipt(providerMock, [
      {
        blockNumber: 1234,
        blockHash: '0x123',
        transactionIndex: 123,
        removed: false,
        address: 'string',
        data: '',
        topics: [],
        transactionHash: '0x123',
        logIndex: 123
      }
    ]);

    expect(getTransactionReceiptSpy).toHaveBeenCalled();
    expect(result.length).toBe(1);
    expect(result[0]).toBe(txReceiptMock);
  });
});
