// tests/render/asciiGrid.test.ts
import { describe, it, expect } from 'vitest';
import { getSymbolForBody } from '../../src/render/asciiGrid';

describe('asciiGrid', () => {
  it('returns correct symbol for sun', () => {
    expect(getSymbolForBody('sun', undefined)).toBe('☉');
  });
  it('returns correct symbol for bright star', () => {
    expect(getSymbolForBody('star', -1.5)).toBe('*');
  });
});
