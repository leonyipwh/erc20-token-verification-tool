import Logo from '../index';
import { render } from '@testing-library/react';

describe('<Logo>', () => {
  it('should render', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
