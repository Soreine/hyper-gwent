import pluralize from 'pluralize';

import { NAMES, ALIASES } from '../data';
import create from './create';

const DICTIONARY = create([
  ...NAMES.map(name => [name.toLowerCase(), name]),
  // With all plurals
  ...NAMES.map(name => [pluralize(name.toLowerCase()), name]),
  // With all pluralized aliases
  ...NAMES.reduce(
    (array, name) => {
      const aliases = ALIASES[name] || [];
      aliases.forEach((alias) => {
        array.push([alias.toLowerCase(), name]);
        array.push([pluralize(alias.toLowerCase()), name]);
      });
      return array;
    },
    [],
  ),
]);

export default DICTIONARY;
