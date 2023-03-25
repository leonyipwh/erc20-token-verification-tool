export enum ISnackbarType {
  ERROR = 'error',
  SUCCESS = 'success'
}

export interface ISnackbar {
  type: ISnackbarType;
  text?: string;
  open: boolean;
}

export interface ISnackbarContext {
  snackbarState: ISnackbar;
  setSnackbarState: (value: ISnackbar) => void;
}
