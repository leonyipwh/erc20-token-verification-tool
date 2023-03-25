import GasUsage from '../GasUsage';
import { render } from '@testing-library/react';

describe('<GasUsage>', () => {
  it('should render', async () => {
    jest.useFakeTimers();
    const data = [1000, 2000, 3000, 4000];
    const { asFragment } = render(<GasUsage gasUsage={data} />);
    jest.runAllTimers();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display "No transaction record available"', async () => {
    const data: number[] = [];
    const { asFragment } = render(<GasUsage gasUsage={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
