// @flow
/* @jsx h */

// Utils to manage the whitelist and blacklist of URLs
// where Hyper Gwent is enabled

/*
 * Is the extension enabled for the given page URL
 */
function isUrlAccepted(
    currentUrl: string,
    enabledSites: Set<string>,
    disabledSites: Set<string>
): boolean {
    return getEffectiveRule(currentUrl, enabledSites, disabledSites).accepted;
}

/*
 * Return whether the URL is accepted, and returns the rule that affects it
 */
function getEffectiveRule(
    currentUrl: string,
    enabledSites: Set<string>,
    disabledSites: Set<string>
): { accepted: boolean, rule: string | null } {
    const acceptingSite = findMatchingRule(enabledSites, currentUrl);
    const rejectingSite = findMatchingRule(disabledSites, currentUrl);

    if (!acceptingSite) {
        return { accepted: false, rule: null };
    }
    if (!rejectingSite) {
        return { accepted: true, rule: acceptingSite };
    }

    if (isSubUrl(acceptingSite, rejectingSite)) {
        // Reject rule is more specific
        return { accepted: false, rule: rejectingSite };
    }
    if (isSubUrl(rejectingSite, acceptingSite)) {
        // Reject rule is more specific
        return { accepted: true, rule: acceptingSite };
    }

    // This should not happen
    return { accepted: false, rule: null };
}

function blacklist(
    url: string,
    {
        enabledSites,
        disabledSites
    }: {
        enabledSites: Set<string>,
        disabledSites: Set<string>
    }
) {
    addUrlRule(disabledSites, url);
    removeUrlRule(enabledSites, url);
}

function whitelist(
    url: string,
    {
        enabledSites,
        disabledSites
    }: {
        enabledSites: Set<string>,
        disabledSites: Set<string>
    }
) {
    removeUrlRule(disabledSites, url);
    addUrlRule(enabledSites, url);
}

// -----------------------------------
// UTILS
// -----------------------------------

function findMatchingRule(urlSet: Set<string>, url: string): ?string {
    return setToArray(urlSet).find(u => isSubUrl(u, url));
}

function isSubUrl(parentUrl: string, url: string): boolean {
    return url.startsWith(parentUrl);
}

function addUrlRule(urlSet: Set<string>, url: string): Set<string> {
    // Add url to set, and remove all more specific urls
    urlSet.forEach(site => {
        if (isSubUrl(url, site)) {
            urlSet.delete(site);
        }
    });
    urlSet.add(url);
    return urlSet;
}

function removeUrlRule(urlSet: Set<string>, url: string): Set<string> {
    // Remove url from set, and all more specific urls
    urlSet.delete(url);
    urlSet.forEach(site => {
        if (isSubUrl(url, site)) {
            urlSet.delete(site);
        }
    });
    return urlSet;
}

function setToArray(set: Set<string>): Array<string> {
    return Array.from(set.values());
}

function arrayToSet(array: Array<string>): Set<string> {
    return new Set(array);
}

export {
    setToArray,
    arrayToSet,
    isUrlAccepted,
    getEffectiveRule,
    blacklist,
    whitelist
};
