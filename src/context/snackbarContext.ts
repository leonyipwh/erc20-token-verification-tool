import { createContext } from 'react';
import { ISnackbarType, ISnackbarContext } from '../types/snackbar';

const snackbarContext = createContext<ISnackbarContext>({
  snackbarState: { type: ISnackbarType.ERROR, open: false },
  setSnackbarState: () => {}
});

export default snackbarContext;
