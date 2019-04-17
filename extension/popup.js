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

async function getCurrentUrl(): Promise<URL> {
    if (!browser.tabs) {
        // For testing in normal context
        return window.location;
    }

    // The only one tab returned should be the active one
    const [activeTab] = await browser.tabs.query({
        active: true,
        currentWindow: true
    });

    return new URL(activeTab.url);
}

class OptionsPanel extends Component<
    {},
    { options: ?Options, currentUrl: URL }
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

        if (!options || !currentUrl) {
            return null;
        }

        const currentSite = currentUrl.origin;
        const currentPage = currentUrl.href;

        const {
            shouldUnderline,
            lowQualityArt,
            enabledSites,
            disabledSites
        } = options;

        const enableUrl = (url: string) => {
            whitelist(url, { enabledSites, disabledSites });
            this.updateOptions({
                ...options,
                enabledSites,
                disabledSites
            });
        };

        const disableUrl = (url: string) => {
            blacklist(url, { enabledSites, disabledSites });
            this.updateOptions({
                ...options,
                enabledSites,
                disabledSites
            });
        };

        return (
            <div>
                <SiteToggleButton
                    url={currentPage}
                    options={options}
                    enableText="Enable on this page"
                    disableText="Disable on this page"
                    enableUrl={enableUrl}
                    disableUrl={disableUrl}
                />

                <SiteToggleButton
                    url={currentSite}
                    options={options}
                    enableText="Enable on this site"
                    disableText="Disable on this site"
                    enableUrl={enableUrl}
                    disableUrl={disableUrl}
                />

                <CheckboxOption
                    id="shouldUnderline"
                    checked={shouldUnderline}
                    onChange={e => {
                        this.updateOptions({
                            ...options,
                            shouldUnderline: e.target.checked
                        });
                    }}
                    description="Underline card names"
                    hint=""
                />

                <CheckboxOption
                    id="lowQualityArt"
                    checked={lowQualityArt}
                    onChange={e => {
                        this.updateOptions({
                            ...options,
                            lowQualityArt: e.target.checked
                        });
                    }}
                    description="Use low quality card arts"
                    hint="Tooltips may load faster if your internet connection is
      slow"
                />
            </div>
        );
    }
}

function SiteToggleButton({
    url,
    options,
    enableText,
    disableText,
    enableUrl,
    disableUrl
}: {
    url: string,
    options: Options,
    enableText: string,
    disableText: string,
    enableUrl: (url: string) => void,
    disableUrl: (url: string) => void
}) {
    const { enabledSites, disabledSites } = options;
    const siteEnabled = isUrlAccepted(url, enabledSites, disabledSites);

    // Result of the button
    const willEnable = !siteEnabled;

    return (
        <button
            type="button"
            onClick={() => {
                if (willEnable) {
                    enableUrl(url);
                } else {
                    disableUrl(url);
                }
            }}
        >
            {willEnable ? enableText : disableText}
        </button>
    );
}

function CheckboxOption({
    id,
    checked,
    description,
    hint,
    ...rest
}: {
    id: string,
    checked: boolean,
    description: string,
    hint: string
}) {
    return (
        <div>
            <label htmlFor={id} className="checkboxLabel">
                <input id={id} type="checkbox" {...rest} />
                <span
                    className={
                        checked ? 'fakeCheckbox checked' : 'fakeCheckbox'
                    }
                />
                {description}
            </label>
            {hint && <div className="hint">{hint}</div>}
        </div>
    );
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
