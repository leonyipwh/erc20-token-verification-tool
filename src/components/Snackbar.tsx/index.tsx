import { useContext } from 'react';
import { default as MuiSnackbar, SnackbarOrigin } from '@mui/material/Snackbar';
import SnackbarContext from '../../context/snackbarContext';
import Alert from '@mui/material/Alert';

const Snackbar = () => {
  const { snackbarState, setSnackbarState } = useContext(SnackbarContext);
  const { open, text, type } = snackbarState;
  const snackbarPosition: SnackbarOrigin = {
    vertical: 'top',
    horizontal: 'right'
  };

  const handleSnackBarClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  return (
    <MuiSnackbar
      anchorOrigin={{ ...snackbarPosition }}
      open={open}
      onClose={handleSnackBarClose}
      key={snackbarPosition.vertical + snackbarPosition.horizontal}
    >
      <Alert
        onClose={handleSnackBarClose}
        severity={type}
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
