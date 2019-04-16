// @flow
/* @jsx h */
/* global document */

import { h, render, Component } from 'preact';
import browser from 'webextension-polyfill';

type Options = {
    shouldUnderline: boolean,
    lowQualityArt: boolean,
    enabledDomains: string[]
};

const DEFAULT_OPTIONS: Options = {
    shouldUnderline: true,
    lowQualityArt: false,
    enabledDomains: ['https://reddit.com/gwent']
};

// Access to settings UI elements
const UI = {
    get shouldUnderline(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('underline');
    },

    get lowQualityArt(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('low-quality');
    },

    get enabledSwitch(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('switch');
    },

    get enabledSwitchPin(): HTMLInputElement {
        // $FlowFixMe
        return document.getElementById('pin');
    },

    toggleSwitch(active: boolean) {
        this.enabledSwitchPin.setAttribute(
            'class',
            active ? 'switch-pin switch-pin-on' : 'switch-pin'
        );
    },

    // Update the UI with the given options state
    updateForOptions(options: Options) {
        UI.shouldUnderline.checked = options.shouldUnderline;
        UI.lowQualityArt.checked = options.lowQualityArt;

        const currentlyActive = true;
        UI.toggleSwitch(currentlyActive);
    }
};

// Update the options, and propagate it to the UI and the storage
async function mutateOptions(mutator: (prevOptions: Options) => void) {
    mutator(currentOptions);
    UI.updateForOptions(currentOptions);
    saveOptions(currentOptions);
}

// Saves options to browser.storage.sync.
async function saveOptions({
    shouldUnderline,
    lowQualityArt,
    enabledDomains
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
        enabledDomains
    });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
async function loadOptions(): Options {
    if (!browser.storage) {
        console.warn(
            'Current context does not provide browser APIs. Skipping loading options'
        );
        return DEFAULT_OPTIONS;
    }
    return await browser.storage.sync.get(DEFAULT_OPTIONS);
}

// UI.shouldUnderline.addEventListener('change', () => {
//     mutateOptions(options => {
//         options.shouldUnderline = !options.shouldUnderline;
//     });
// });
// UI.lowQualityArt.addEventListener('change', () => {
//     mutateOptions(options => {
//         options.lowQualityArt = !options.lowQualityArt;
//     });
// });
// UI.enabledSwitch.addEventListener('click', () => {
//     mutateOptions(options => {});
// });

async function getCurrentUrl(): Promise<string> {
    const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true
    });

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    const activeTab = tabs[0];
    console.log({ activeTab, url: activeTab.url });
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

    render({}, { options, currentUrl }) {
        if (!options) {
            return null;
        }

        const { shouldUnderline, lowQualityArt, enabledDomains } = options;

        return (
            <div>
                <label>
                    Enable Hyper Gwent on {currentUrl}
                    <Switch
                        checked={enabledDomains}
                        onChange={newValue => {
                            this.setState({
                                options: {
                                    ...options,
                                    enabledDomains: newValue
                                }
                            });
                        }}
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
