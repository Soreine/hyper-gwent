import ALIASES from './ALIASES';
import CARD_LIST from './CARD_LIST';

const NEW = {};
CARD_LIST.forEach(card => {
    NEW[card.id] = [card.name];
});

Object.keys(ALIASES).forEach(id => {
    if (id) {
        NEW[id] = NEW[id].concat(ALIASES[id]);
    }
});

console.log(JSON.stringify(NEW, null, 2));
