// @flow
/* @jsx h */
/* global document */

import {
    // eslint-disable-next-line
    h,
    render,
    Component
} from 'preact';

import { isUrlAccepted, blacklist, whitelist } from './sitelist';

import { loadOptions, saveOptions, type Options } from './options';
import { getCurrentUrl } from './getCurrentUrl';

class OptionsPanel extends Component<
    {},
    {
        options: ?Options,
        currentUrl: ?URL,
        // True if the user made some changes to the settings
        updated: boolean
    }
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
            options: newOptions,
            updated: true
        });

        saveOptions(newOptions);
    };

    render() {
        const { options, currentUrl, updated } = this.state;

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

                {updated && (
                    <div className="reload">
                        Reload the page for changes to take effect
                    </div>
                )}
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

render(<OptionsPanel />, document.body);
