import { InfuraProvider } from '@ethersproject/providers';

export interface INetwork {
  name: string;
  subdomain: string;
}

export interface ITokenForm {
  network: INetwork;
  address: string;
  provider?: InfuraProvider;
}

export interface ITokenContext {
  submitForm: ITokenForm;
  setSubmitForm: (value: ITokenForm) => void;
}

export interface IProfileData {
  label: string;
  value: number | string | undefined;
}
