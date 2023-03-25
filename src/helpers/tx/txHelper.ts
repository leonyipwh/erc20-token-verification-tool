import txEventTopics from '../../constants/txEventTopics';
import { Provider, Log, TransactionReceipt } from '@ethersproject/providers';

export const getTokenLogs = async (provider: Provider, address: string): Promise<Log[]> => {
  const offset = 50;
  const window = 6000 * 30;
  let monthRange = 3;
  let blockNum = await provider.getBlockNumber();
  let targetLogs: Log[] = [];

  const fetchLogs = async (from: number, to?: number): Promise<Log[]> => {
    const logs = await provider.getLogs({
      toBlock: to || 'latest',
      fromBlock: from - offset,
      address,
      topics: [txEventTopics.transfer]
    });

    targetLogs = [...logs, ...targetLogs].slice(-offset);
    if (targetLogs.length < offset && monthRange) {
      const fromBlock = from - offset - window;
      const toBlock = from;
      monthRange--;
      return fetchLogs(fromBlock, toBlock);
    } else {
      return targetLogs;
    }
  };

  return fetchLogs(blockNum);
};

export const getTxReceipt = async (
  provider: Provider,
  logs: Log[]
): Promise<TransactionReceipt[]> => {
  return Promise.all(
    logs.map(async (log: Log) => await provider.getTransactionReceipt(log.transactionHash))
  );
};
