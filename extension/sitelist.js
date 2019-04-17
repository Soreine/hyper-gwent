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
    const acceptingSite = findMatchingRule(enabledSites, currentUrl);
    const rejectingSite = findMatchingRule(disabledSites, currentUrl);

    if (!acceptingSite) {
        return false;
    }
    if (!rejectingSite) {
        return true;
    }

    if (isSubUrl(acceptingSite, rejectingSite)) {
        // Reject rule is more specific
        return false;
    }
    if (isSubUrl(rejectingSite, acceptingSite)) {
        // Reject rule is more specific
        return true;
    }

    // This should not happen
    return false;
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

export { setToArray, arrayToSet, isUrlAccepted, blacklist, whitelist };
