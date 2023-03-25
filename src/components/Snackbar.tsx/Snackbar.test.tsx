import { render, screen } from '@testing-library/react';
import Snackbar from './index';
import SnackbarContext from '../../context/snackbarContext';
import { ISnackbarType } from '../../types/snackbar';

describe('<Snackbar>', () => {
  it('should display error snackbar', () => {
    const snackbarState = {
      type: ISnackbarType.ERROR,
      open: true,
      text: 'this is error message'
    };
    const { asFragment } = render(
      <SnackbarContext.Provider value={{ snackbarState, setSnackbarState: () => {} }}>
        <Snackbar />
      </SnackbarContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display success snackbar', () => {
    const snackbarState = {
      type: ISnackbarType.SUCCESS,
      open: true,
      text: 'this is success message'
    };
    const { asFragment } = render(
      <SnackbarContext.Provider value={{ snackbarState, setSnackbarState: () => {} }}>
        <Snackbar />
      </SnackbarContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should hide snackbar', () => {
    const snackbarState = {
      type: ISnackbarType.ERROR,
      open: false,
      text: 'this is snack bar'
    };
    render(
      <SnackbarContext.Provider value={{ snackbarState, setSnackbarState: () => {} }}>
        <Snackbar />
      </SnackbarContext.Provider>
    );
    const snackbar = screen.queryByText(snackbarState.text);
    expect(snackbar).not.toBeInTheDocument();
  });
});
