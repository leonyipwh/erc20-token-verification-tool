import TokenDetails from '../index';
import { render } from '@testing-library/react';
import TokenFormContext from '../../../context/tokenFormContext';
import { networks } from '../../../constants/networks';

jest.mock('../../../components/TokenDetails/TokenOverview', () => {
  const TokenOverview = () => <>Token Overview</>;
  return TokenOverview;
});

jest.mock('../../../components/TokenDetails/TokenStandard', () => {
  const TokenStandard = () => <>Token Standard</>;
  return TokenStandard;
});

describe('<TokenDetails>', () => {
  it('should render', () => {
    const submitForm = {
      network: networks[0],
      address: 'add'
    };
    const { asFragment } = render(
      <TokenFormContext.Provider value={{ submitForm, setSubmitForm: () => {} }}>
        <TokenDetails />
      </TokenFormContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render empty fragment', () => {
    const { asFragment } = render(<TokenDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
