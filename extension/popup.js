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

import {
    isUrlAccepted,
    blacklist,
    whitelist,
    arrayToSet,
    setToArray
} from './sitelist';

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

    updateOptions = (newOptions: Options) => {
        this.setState({
            options: newOptions
        });

        if (newOptions) {
            saveOptions(newOptions);
        }
    };

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

        const enabledOnCurrentPage = isUrlAccepted(
            currentUrl,
            enabledSites,
            disabledSites
        );

        const toggleCurrentUrl = () => {
            const enable = !enabledOnCurrentPage;

            if (enable) {
                whitelist(currentUrl, { enabledSites, disabledSites });
            } else {
                blacklist(currentUrl, { enabledSites, disabledSites });
            }

            this.updateOptions({
                ...options,
                enabledSites,
                disabledSites
            });
        };

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
                    <input
                        type="checkbox"
                        checked={shouldUnderline}
                        onChange={({ value }) => {
                            this.updateOptions({
                                ...options,
                                shouldUnderline: value
                            });
                        }}
                    />
                    Underline card names
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={lowQualityArt}
                        onChange={({ value }) => {
                            this.updateOptions({
                                ...options,
                                lowQualityArt: value
                            });
                        }}
                    />
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
