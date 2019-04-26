/* eslint-disable no-console */
// eslint-disable-next-line
import Benchmark from 'benchmark';
import DICTIONARY from '../core/data/static/DICTIONARY';
import findAllMatches from '../core/findAllMatches';

const suite = new Benchmark.Suite();

const TEXT = `
Hyper Gwent is an extension that detects card names on the pages you visit, and adds tooltip to them. It is running on this page. See by yourself:

Speartip asleep is almost as scary as Speartip awake.
ADC does not stand for Attack Damage Carry.
Villentretenmerth is hard to pronounce. But Borkh isn't!
I know a joke, it goes like this: Gigni, Gyrden, and Gaard enter a bar...
One recruit, two recruits, three recruits...
`;

suite
    .add('Find all matches', () => {
        findAllMatches(DICTIONARY, TEXT);
    })
    .on('cycle', event => {
        console.log(String(event.target));
    })
    .run({ async: true });
