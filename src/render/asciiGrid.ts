// src/render/asciiGrid.ts
import { CelestialBodyType } from '../astronomy/objectTypes';

export function getSymbolForBody(type: CelestialBodyType, magnitude?: number): string {
  switch (type) {
    case 'sun': return '☉';
    case 'moon': return '◐';
    case 'planet': return '*';
    case 'star':
      if (magnitude !== undefined && magnitude < 1.0) return '*';
      if (magnitude !== undefined && magnitude < 3.0) return '+';
      return '.';
    default: return '.';
  }
}
