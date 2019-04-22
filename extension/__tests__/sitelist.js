// @flow
import test from 'ava';
import { isUrlAccepted, blacklist, whitelist, setToArray } from '../sitelist';

function check(
    t: *,
    { enabledSites, disabledSites }: *,
    expect: {
        accepted?: string[],
        rejected?: string[],
        enabledSites?: string[],
        disabledSites?: string[]
    }
) {
    if (expect.enabledSites) {
        t.deepEqual(setToArray(enabledSites), expect.enabledSites);
    }
    if (expect.disabledSites) {
        t.deepEqual(setToArray(disabledSites), expect.disabledSites);
    }

    if (expect.accepted) {
        expect.accepted.forEach(url =>
            t.true(isUrlAccepted(url, enabledSites, disabledSites))
        );
    }

    if (expect.rejected) {
        expect.rejected.forEach(url =>
            t.false(isUrlAccepted(url, enabledSites, disabledSites))
        );
    }
}

test('Should whitelist a site', t => {
    const enabledSites = new Set([]);
    const disabledSites = new Set([]);

    whitelist('https://www.reddit.com/gwent', { enabledSites, disabledSites });

    check(
        t,
        { enabledSites, disabledSites },
        {
            enabledSites: ['https://www.reddit.com/gwent'],
            disabledSites: [],
            accepted: [
                'https://www.reddit.com/gwent',
                'https://www.reddit.com/gwent/some-page'
            ],
            rejected: [
                'http://reddit.com/gwent',
                'https://www.reddit.com',
                'https://www.reddit.com/gwen'
            ]
        }
    );
});

test('Should blacklist a site', t => {
    const enabledSites = new Set([
        'https://www.reddit.com/gwent',
        'https://gwentdb.com/'
    ]);
    const disabledSites = new Set([]);

    blacklist('https://gwentdb.com/', { enabledSites, disabledSites });

    check(
        t,
        { enabledSites, disabledSites },
        {
            enabledSites: ['https://www.reddit.com/gwent'],
            disabledSites: ['https://gwentdb.com/'],
            accepted: [
                'https://www.reddit.com/gwent',
                'https://www.reddit.com/gwent/some-page'
            ],
            rejected: [
                'https://gwentdb.com/',
                'https://gwentdb.com/somepage',

                'http://reddit.com/gwent',
                'https://www.reddit.com',
                'https://www.reddit.com/gwen'
            ]
        }
    );
});

test('Should whitelist a specific site subpage', t => {
    const enabledSites = new Set([]);
    const disabledSites = new Set(['https://gwentdb.com/']);

    whitelist('https://gwentdb.com/allowed', { enabledSites, disabledSites });

    check(
        t,
        { enabledSites, disabledSites },
        {
            enabledSites: ['https://gwentdb.com/allowed'],
            disabledSites: ['https://gwentdb.com/'],
            accepted: [
                'https://gwentdb.com/allowed',
                'https://gwentdb.com/allowed/somepage'
            ],
            rejected: ['https://gwentdb.com/rejected', 'https://gwentdb.com']
        }
    );
});

test('Should blacklist a specific site subpage', t => {
    const enabledSites = new Set(['https://www.reddit.com/']);
    const disabledSites = new Set(['https://www.reddit.com/disallowed1']);

    blacklist('https://www.reddit.com/disallowed2', {
        enabledSites,
        disabledSites
    });

    check(
        t,
        { enabledSites, disabledSites },
        {
            enabledSites: ['https://www.reddit.com/'],
            disabledSites: [
                'https://www.reddit.com/disallowed1',
                'https://www.reddit.com/disallowed2'
            ],
            accepted: [
                'https://www.reddit.com/',
                'https://www.reddit.com/allowed'
            ],
            rejected: [
                'https://www.reddit.com/disallowed1',
                'https://www.reddit.com/disallowed2',
                'https://www.reddit.com/disallowed1/subpage',
                'https://www.reddit.com/disallowed2/subpage'
            ]
        }
    );
});
