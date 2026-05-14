import { expect, test } from 'vitest';
import { render } from 'ink-testing-library';
import { Header } from '../../src/ui/Header';

// Failing test: Header component not rendering correctly
test('renders dotsky title', () => {
  const { lastFrame } = render(<Header />);
  expect(lastFrame()).toContain('dotsky');
  expect(lastFrame()).toContain('dotsky');
});