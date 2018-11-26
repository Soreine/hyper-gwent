import ALIASES from './ALIASES';
import CARD_LIST from './CARD_LIST';

const NAME_IDS = {};
CARD_LIST.forEach(card => {
    NAME_IDS[card.name] = card.id;
});

const NEW = {};
CARD_LIST.forEach(card => {
    NEW[card.id] = [];
});
Object.keys(ALIASES).forEach(name => {
    const id = NAME_IDS[name];
    if (id) {
        NEW[id] = ALIASES[name];
    }
});

console.log(JSON.stringify(NEW, null, 2));
