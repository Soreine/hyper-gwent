// @flow
/* @jsx h */
/* global document */

import {
    // eslint-disable-next-line
    h,
    render,
    Component
} from 'preact';

import {
    isUrlAccepted,
    getEffectiveRule,
    blacklist,
    whitelist
} from './sitelist';

import { loadOptions, saveOptions, type Options } from './options';
import { getLocalCardsData } from './retrieveCardsData';
import { getCurrentUrl } from './getCurrentUrl';

class OptionsPanel extends Component<
    {},
    {
        options: ?Options,
        gwentVersion: ?string,
        currentUrl: ?URL,
        // True if the user made some changes to the settings
        updated: boolean
    }
> {
    componentDidMount() {
        setTimeout(async () => {
            const options = await loadOptions();
            const data = await getLocalCardsData();
            const currentUrl = await getCurrentUrl();

            this.setState({
                options,
                currentUrl,
                gwentVersion:
                    data.version.gwent ||
                    // 2.1.1 was the version before version.gwent was added
                    '2.1.1'
            });
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
        const { options, currentUrl, updated, gwentVersion } = this.state;

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
                <div
                    className="reload"
                    style={
                        updated
                            ? {}
                            : {
                                  color: 'transparent'
                              }
                    }
                >
                    Reload the page for changes to take effect
                </div>

                <RunningIndicator
                    page={currentPage}
                    site={currentSite}
                    options={options}
                />

                <SiteToggleButton
                    url={currentSite}
                    secondary={false}
                    options={options}
                    enableText="Enable on whole site"
                    disableText="Disable on whole site"
                    enableUrl={enableUrl}
                    disableUrl={disableUrl}
                />

                <SiteToggleButton
                    url={currentPage}
                    secondary
                    options={options}
                    enableText="Enable on current page only"
                    disableText="Disable on current page only"
                    enableUrl={enableUrl}
                    disableUrl={disableUrl}
                />

                <div className="hr" />

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
                    hint="This helps loading tooltips faster on slow internet connection"
                />

                <div className="hr" />

                <div className="footer">
                    <div>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://soreine.dev/hyper-gwent/help"
                        >
                            Help
                        </a>
                    </div>
                    <div>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://airtable.com/shrgU3jbaF1gkban7"
                        >
                            Feedback
                        </a>
                    </div>
                    {gwentVersion && (
                        <div className="version">
                            Updated for patch: {gwentVersion}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

function RunningIndicator({
    page,
    site,
    options
}: {
    page: string,
    site: string,
    options: Options
}) {
    const { enabledSites, disabledSites } = options;
    const { accepted, rule } = getEffectiveRule(
        page,
        enabledSites,
        disabledSites
    );

    let message: string;
    if (accepted) {
        if (rule) {
            message = `Enabled on`;
        } else {
            message = `Enabled on`;
        }
    } else if (rule) {
        message = `Disabled on`;
    } else {
        message = `Not enabled`;
    }

    const displayedUrl = rule || site;

    return (
        <div className="runningIndicator">
            <div className={accepted ? 'running' : 'not running'}>
                {message}
            </div>
            {displayedUrl && (
                <div className="currentWebsite" title={displayedUrl}>
                    {shortenUrl(displayedUrl)}
                </div>
            )}
        </div>
    );
}

function SiteToggleButton({
    url,
    options,
    enableText,
    disableText,
    enableUrl,
    disableUrl,
    secondary
}: {
    url: string,
    options: Options,
    enableText: string,
    disableText: string,
    secondary: boolean,
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
            title={url}
            className={secondary ? 'secondary' : ''}
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
                <input id={id} checked={checked} type="checkbox" {...rest} />
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

function shortenUrl(url: string) {
    return url.replace(/^.*:\/\//, '');
}

const { body } = document;
if (body) {
    render(<OptionsPanel />, body);
}
