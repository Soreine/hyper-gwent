// @flow
/* @jsx h */
/* global document */

import {
    // eslint-disable-next-line
    h,
    render,
    Component
} from 'preact';
import browser from 'webextension-polyfill';

type Options = {
    shouldUnderline: boolean,
    lowQualityArt: boolean,
    enabledSites: Set<string>,
    disabledSites: Set<string>
};

type RawOptions = {
    shouldUnderline: boolean,
    lowQualityArt: boolean,
    enabledSites: Array<string>,
    disabledSites: Array<string>
};

const DEFAULT_OPTIONS: RawOptions = {
    shouldUnderline: true,
    lowQualityArt: false,
    enabledSites: ['https://reddit.com/gwent'],
    disabledSites: ['https://www.gwentdb.com']
};

// Saves options to browser.storage.sync.
async function saveOptions({
    shouldUnderline,
    lowQualityArt,
    enabledSites,
    disabledSites
}: Options) {
    if (!browser.storage) {
        console.warn(
            'Current context does not provide browser APIs. Skipping saving options'
        );
        return;
    }
    await browser.storage.sync.set({
        shouldUnderline,
        lowQualityArt,
        enabledSites: setToArray(enabledSites),
        disabledSites: setToArray(disabledSites)
    });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
async function loadOptions(): Promise<Options> {
    let rawOptions: RawOptions;
    if (!browser.storage) {
        console.warn(
            'Current context does not provide browser APIs. Skipping loading options'
        );
        rawOptions = DEFAULT_OPTIONS;
    } else {
        rawOptions = await browser.storage.sync.get(DEFAULT_OPTIONS);
    }

    const options = {
        shouldUnderline: rawOptions.shouldUnderline,
        lowQualityArt: rawOptions.lowQualityArt,
        enabledSites: arrayToSet(rawOptions.enabledSites),
        disabledSites: arrayToSet(rawOptions.disabledSites)
    };

    return options;
}

function findMatchingRule(urlSet: Set<string>, url: string): ?string {
    return setToArray(urlSet).find(u => isSubUrl(u, url));
}

/*
 * Is the extension enabled for the given page URL
 */
function isEnabledForUrl(
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

function isSubUrl(parentUrl: string, url: string): boolean {
    return url.startsWith(parentUrl);
}

function addUrlRule(urlSet: Set<string>, url: string): Set<string> {
    // Add url to set, and remove all more specific urls
    urlSet.add(url);
    urlSet.forEach(site => {
        if (isSubUrl(url, site)) {
            urlSet.delete(site);
        }
    });
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

async function getCurrentUrl(): Promise<string> {
    if (!browser.tabs) {
        // For testing in normal context
        return window.location.href;
    }

    // The only one tab returned should be the active one
    const [activeTab] = await browser.tabs.query({
        active: true,
        currentWindow: true
    });

    return activeTab.url;
}

class OptionsPanel extends Component<
    {},
    { options: ?Options, currentUrl: string }
> {
    componentDidMount() {
        setTimeout(async () => {
            const options = await loadOptions();
            const currentUrl = await getCurrentUrl();
            this.setState({ options, currentUrl });
        });
    }

    componentDidUpdate(prevProps, { options: prevOptions }) {
        const { options } = this.state;
        if (options && prevOptions !== options) {
            saveOptions(options);
        }
    }

    render() {
        const { options, currentUrl } = this.state;
        if (!options) {
            return null;
        }

        const {
            shouldUnderline,
            lowQualityArt,
            enabledSites,
            disabledSites
        } = options;

        const enabledOnCurrentPage = isEnabledForUrl(
            currentUrl,
            enabledSites,
            disabledSites
        );

        function toggleCurrentUrl() {
            const enable = !enabledOnCurrentPage;
            this.setState({
                options: {
                    ...options,
                    enabledSites: enable
                        ? addUrlRule(enabledSites, currentUrl)
                        : removeUrlRule(enabledSites, currentUrl),
                    disabledSites: enable
                        ? removeUrlRule(disabledSites, currentUrl)
                        : addUrlRule(disabledSites, currentUrl)
                }
            });
        }

        return (
            <div>
                <label>
                    Enable Hyper Gwent on {currentUrl}
                    <Switch
                        checked={enabledOnCurrentPage}
                        onChange={toggleCurrentUrl}
                    />
                </label>

                <label>
                    <input type="checkbox" checked={shouldUnderline} />
                    Underline card names
                </label>

                <label>
                    <input type="checkbox" checked={lowQualityArt} />
                    Use low quality card arts.
                    <div className="hint">
                        Tooltips may load faster if your internet connection is
                        slow.
                    </div>
                </label>
            </div>
        );
    }
}

function Switch({
    checked,
    onChange
}: {
    checked: boolean,
    onChange: (newValue: boolean) => void
}) {
    return (
        <div className="switch" id="switch" onClick={() => onChange(!checked)}>
            <div
                className={checked ? 'switch-pin switch-pin-on' : 'switch-pin'}
                id="pin"
            />
            <div className="switch-label">Off</div>
            <div className="switch-label">On</div>
        </div>
    );
}

render(<OptionsPanel />, document.body);
