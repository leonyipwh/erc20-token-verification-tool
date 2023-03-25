import { createContext } from 'react';
import { ITokenContext } from '../types/tokenVerification';
import { networks } from '../constants/networks';

const TokenFormContext = createContext<ITokenContext>({
  submitForm: { network: networks[0], address: '' },
  setSubmitForm: () => {}
});

export default TokenFormContext;
