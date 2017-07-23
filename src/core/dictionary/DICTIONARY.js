import pluralize from 'pluralize';

import { NAMES } from '../data';
import create from './create';

const DICTIONARY = create([
  ...NAMES.map(name => [name.toLowerCase(), name]),
  // With all plurals
  ...NAMES.map(name => [pluralize(name.toLowerCase()), name]),
]);

export default DICTIONARY;
