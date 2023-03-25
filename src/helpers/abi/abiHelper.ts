import erc20Abi from './erc20-abi-structure.json';
import { isMatch, pick } from 'lodash';
import Differify, { DIFF_MODES, multiPropDiff } from '@netilon/differify';

export const compatibilityCheck = (data: any): multiPropDiff[] => {
  const differify = new Differify({
    mode: { object: DIFF_MODES.DIFF, array: DIFF_MODES.DIFF }
  });
  const nonConformant = [];
  const compareList = ['inputs', 'name', 'outputs', 'type'];

  for (const standard of erc20Abi) {
    const { name, type } = standard;
    const matched = data.find((o: any) => o.name === name && o.type === type);
    if (!isMatch(matched, standard)) {
      const standardItem = pick(standard, compareList);
      const checkItem = pick(matched, compareList);

      const diff = differify.compare(standardItem, checkItem);
      nonConformant.push({ ...diff });
    }
  }

  return nonConformant;
};
