import { render } from '@testing-library/react';
import ResultRow from '../index';
import { diffMock } from '../mocks/diff.mock';

describe('<ResultRow>', () => {
  it('should render', () => {
    const { inputs } = diffMock[0]._;
    const { asFragment } = render(<ResultRow data={inputs} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
