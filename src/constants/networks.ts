import { INetwork } from '../types/tokenVerification';

export const networks: INetwork[] = [
  {
    name: 'mainnet',
    subdomain: 'api'
  },
  {
    name: 'rinkeby',
    subdomain: 'api-rinkeby'
  },
  {
    name: 'ropsten',
    subdomain: 'api-ropsten'
  },
  {
    name: 'goerli',
    subdomain: 'api-goerli'
  }
];
