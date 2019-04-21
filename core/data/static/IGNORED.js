/* @flow */

// Ignored cards, because several cards have the same name
const IGNORED: {
    [CardID]: true
} = [
    // Arnjolf the Patricide
    '202182',
    // Shupe: Mage
    '201725',
    '201726',
    '201727',
    '201728',
    '201729',
    '201730',
    // Shupe: Hunter
    '201731',
    '201732',
    '201733',
    '201734',
    '201735',
    '201736',
    // Shupe: Knight
    '201737',
    '201738',
    '201739',
    '201740',
    '201741',
    '201742'
].reduce((acc, id) => {
    acc[id] = true;
    return acc;
}, {});

export default IGNORED;
