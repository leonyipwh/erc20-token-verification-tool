import { compatibilityCheck } from './abiHelper';
import { incomAbiMock } from './mocks/incomAbi.mock';
import { comAbiMock } from './mocks/comAbi.mock';
import { resultSample } from './mocks/resultSample.mock';

describe('compatibilityCheck()', () => {
  it('should return incompetable result on transfer() and Approval event', () => {
    const result = compatibilityCheck(incomAbiMock);
    expect(result).toStrictEqual(resultSample);
  });

  it('should return competable result', () => {
    const result = compatibilityCheck(comAbiMock);
    expect(result).toStrictEqual([]);
  });
});
