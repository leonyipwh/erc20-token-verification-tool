import { render } from '@testing-library/react';
import TokenProfile from './index';

jest.mock('../../helpers/infuraHelper', () => {
  return {
    initProvider: () => {}
  };
});

const profileMock = [
  {
    label: 'Name',
    value: 'BNB'
  },
  {
    label: 'Symbol',
    value: 'BNB'
  },
  {
    label: 'Decimals',
    value: '18'
  },
  {
    label: 'Total Supply',
    value: '16,579,517.05525335'
  }
];

describe('<TokenProfile>', () => {
  it('should render', () => {
    const { asFragment } = render(<TokenProfile data={profileMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
