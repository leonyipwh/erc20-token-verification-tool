import { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import TokenAddressForm from '../../components/TokenAddressForm';
import TokenDetails from '../../components/TokenDetails';
import { networks } from '../../constants/networks';
import { ITokenForm } from '../../types/tokenVerification';
import TokenFormContext from '../../context/tokenFormContext';
import SnackbarContext from '../../context/snackbarContext';
import { ISnackbar, ISnackbarType } from '../../types/snackbar';
import Snackbar from '../../components/Snackbar.tsx';

const TokenVerification = () => {
  const [submitForm, setSubmitForm] = useState<ITokenForm>({
    network: networks[0],
    address: ''
  });
  const [snackbarState, setSnackbarState] = useState<ISnackbar>({
    type: ISnackbarType.ERROR,
    open: false
  });
  const tokenFormValue = useMemo(() => ({ submitForm, setSubmitForm }), [submitForm]);
  const snackbarValue = useMemo(() => ({ snackbarState, setSnackbarState }), [snackbarState]);

  return (
    <TokenFormContext.Provider value={tokenFormValue}>
      <SnackbarContext.Provider value={snackbarValue}>
        <Snackbar />
        <Container fixed>
          <TokenAddressForm />
          <TokenDetails />
        </Container>
      </SnackbarContext.Provider>
    </TokenFormContext.Provider>
  );
};

export default TokenVerification;
