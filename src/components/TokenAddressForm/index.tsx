import React, { useState, useEffect, useContext } from 'react';
import { initProvider } from '../../helpers/infuraHelper';
import { networks } from '../../constants/networks';
import { ITokenForm } from '../../types/tokenVerification';
import TokenContext from '../../context/tokenFormContext';
import SnackbarContext from '../../context/snackbarContext';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const errorMsg = {
  invalidAddress: 'Invalid Contract Address',
  infuraProvider: 'Unable to connect Infura'
};

const TokenAddressForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [formValue, setFormValue] = useState<ITokenForm>({
    network: networks[0],
    address: ''
  });
  const { setSubmitForm } = useContext(TokenContext);
  const { snackbarState, setSnackbarState } = useContext(SnackbarContext);

  const handleNetworkChange = (event: SelectChangeEvent) => {
    setError(null);
    const network = networks.find((n) => n.name === event.target.value);
    if (!network) return;

    setFormValue({
      network,
      address: ''
    });
    setSubmitForm({ ...formValue, address: '' });
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, address: event.target.value });
  };

  const getProvider = async () => {
    try {
      const provider = await initProvider(formValue.network.name);
      setFormValue({ ...formValue, provider });
    } catch (err) {
      console.error(err);
      setSnackbarState({ ...snackbarState, open: true, text: errorMsg.infuraProvider });
    }
  };

  const setProviderAndSubmitForm = async () => {
    if (!formValue.address || !formValue.provider) return;
    try {
      const code = await formValue.provider.getCode(formValue.address);
      if (code === '0x') throw new Error(errorMsg.invalidAddress);
      setSubmitForm({ ...formValue, provider: formValue.provider });
    } catch (err) {
      if (err.status === 401) {
        setSnackbarState({ ...snackbarState, open: true, text: err.body });
      } else {
        setError(errorMsg.invalidAddress);
      }

      setSubmitForm({ ...formValue, address: '' });
    }
  };

  useEffect(() => {
    getProvider();
  }, [formValue.network]);

  useEffect(() => {
    const addressLength = formValue.address.length;
    if (
      (addressLength > 0 && addressLength !== 42) ||
      (addressLength === 0 && formValue.provider)
    ) {
      setError(errorMsg.invalidAddress);
      setSubmitForm({ ...formValue, address: '' });
      return;
    }
    setError(null);
    setProviderAndSubmitForm();
  }, [formValue.address]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 0 }}
    >
      <Grid
        item
        xs={12}
        md={2}
      >
        <Select
          id="ethNetworkSelect"
          value={formValue.network.name}
          onChange={handleNetworkChange}
          sx={{ minWidth: '100%', textTransform: 'capitalize' }}
        >
          {networks.map((n, index) => (
            <MenuItem
              key={index}
              value={n.name}
              sx={{ textTransform: 'capitalize' }}
            >
              {n.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
      >
        <TextField
          id="contractAddress"
          label="Contract Address"
          value={formValue.address}
          error={!!error}
          helperText={error}
          sx={{ minWidth: '100%' }}
          onChange={handleAddressChange}
        />
      </Grid>
    </Grid>
  );
};

export default TokenAddressForm;
