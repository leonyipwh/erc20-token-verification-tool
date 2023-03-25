import { render } from '@testing-library/react';
import Loader from './index';

describe('<Loader>', () => {
  it('should render', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
