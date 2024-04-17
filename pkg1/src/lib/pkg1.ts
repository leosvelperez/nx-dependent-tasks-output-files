import { pkg2 } from 'pkg2';

export function pkg1(): string {
  return 'pkg1' + pkg2();
}
