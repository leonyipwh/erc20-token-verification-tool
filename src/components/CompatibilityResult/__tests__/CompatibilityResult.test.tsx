import { render } from '@testing-library/react';
import CompatibilityResult from '../index';
import { diffMock } from '../mocks/diff.mock';

describe('<CompatibilityResult>', () => {
  it('should render', () => {
    const { asFragment } = render(<CompatibilityResult data={diffMock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
