// @flow
import expect from 'expect';
import { isUrlAccepted, blacklist, whitelist, setToArray } from '../sitelist';

function check(
    { enabledSites, disabledSites }: *,
    expected: {
        accepted?: string[],
        rejected?: string[],
        enabledSites?: string[],
        disabledSites?: string[]
    }
) {
    const { 
        accepted,
        rejected,
        enabledSites: expectedEnabledSites,
        disabledSites: expectedDisabledSites
    } = expected;

    if (expectedEnabledSites) {
        expect(setToArray(enabledSites)).toEqual(expectedEnabledSites);
    }
    if (expectedDisabledSites) {
        expect(setToArray(disabledSites)).toEqual(expectedDisabledSites);
    }

    if (accepted) {
        accepted.forEach(url =>
            expect(isUrlAccepted(url, enabledSites, disabledSites)).toBe(true)
        );
    }

    if (rejected) {
        rejected.forEach(url =>
            expect(isUrlAccepted(url, enabledSites, disabledSites)).toBe(false)
        );
    }
}

test('Should whitelist a site', () => {
    const enabledSites = new Set([]);
    const disabledSites = new Set([]);

    whitelist('https://www.reddit.com/gwent', { enabledSites, disabledSites });

    check(
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

test('Should blacklist a site', () => {
    const enabledSites = new Set([
        'https://www.reddit.com/gwent',
        'https://gwentdb.com/'
    ]);
    const disabledSites = new Set([]);

    blacklist('https://gwentdb.com/', { enabledSites, disabledSites });

    check(
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

test('Should whitelist a specific site subpage', () => {
    const enabledSites = new Set([]);
    const disabledSites = new Set(['https://gwentdb.com/']);

    whitelist('https://gwentdb.com/allowed', { enabledSites, disabledSites });

    check(
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

test('Should blacklist a specific site subpage', () => {
    const enabledSites = new Set(['https://www.reddit.com/']);
    const disabledSites = new Set(['https://www.reddit.com/disallowed1']);

    blacklist('https://www.reddit.com/disallowed2', {
        enabledSites,
        disabledSites
    });

    check(
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
