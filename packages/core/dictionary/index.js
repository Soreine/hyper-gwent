import NAMES from './NAMES.json';
import create from './create';
import append from './append';
import contains from './contains';

const DICTIONARY = create(NAMES);
export default DICTIONARY;

export {
    create,
    contains,
    append,
};
