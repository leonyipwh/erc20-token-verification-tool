import TokenVerification from '../index';
import { render, waitFor } from '@testing-library/react';

describe('<TokenVerification>', () => {
  it('should render', async () => {
    const { asFragment } = render(<TokenVerification />);
    await waitFor(() => expect(asFragment()).toMatchSnapshot());
  });
});
