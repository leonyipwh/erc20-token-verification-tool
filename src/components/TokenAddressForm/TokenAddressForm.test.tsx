import { render, waitFor } from '@testing-library/react';
import TokenAddressForm from './index';

describe('<TokenAddressForm>', () => {
  it('should render', async () => {
    const { asFragment } = render(<TokenAddressForm />);
    await waitFor(() => expect(asFragment()).toMatchSnapshot());
  });
});
