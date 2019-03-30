/* global window */
/* @jsx createElement */
// @flow

// eslint-disable-next-line no-unused-vars
import { createElement } from 'jsx-dom';

const REDDIT = 'https://www.reddit.com/r/gwent/';
const REPO = 'https://github.com/Soreine/hyper-gwent/issues';
const CHROME_EXTENSION =
    'https://chrome.google.com/webstore/detail/hyper-gwent/ihaocjeiipaghnmnagdnacpeaeljgneo';
const FIREFOX_EXTENSION =
    'https://addons.mozilla.org/en-US/firefox/addon/hyper-gwent/';

const browser =
    (/firefox/.test(window.navigator.userAgent.toLowerCase()) && 'firefox') ||
    (window.chrome && 'chrome');

function downloadButton() {
    switch (browser) {
        case 'chrome':
            return (
                <a className="download-link" href={CHROME_EXTENSION}>
                    Install
                </a>
            );

        case 'firefox':
            return (
                <a className="download-link" href={FIREFOX_EXTENSION}>
                    Install
                </a>
            );
        default:
            return (
                <p className="noextension">
                    The Hyper Gwent extension is only available for Chrome and
                    Firefox.
                </p>
            );
    }
}

function renderHomepage() {
    return (
        <div className="content">
            <div className="logo">
                <div className="logo-title">Hyper Gwent</div>
                <div className="logo-subtitle">
                    {
                        'Fan-made browser extension for GWENT®: The Witcher Card Game'
                    }
                </div>
            </div>

            {downloadButton()}

            <div className="description">
                <p>
                    {
                        "None of us can reasonably remember every possible Gwent card's name and effect. Browsing "
                    }
                    <a href={REDDIT}>r/gwent</a>
                    {
                        " or reading deck guides can be challenging if you don't know half the cards people are talking about."
                    }
                </p>

                <p>
                    {
                        'Hyper Gwent is an extension that detects card mentions and adds tooltip to them. It is running on this page. See by yourself:'
                    }
                    <ul>
                        <li>
                            Speartip asleep is almost as scary as Speartip
                            awake.
                        </li>
                        <li>ADC does not stand for Attack Damage Carry.</li>
                        <li>
                            {
                                "Villentretenmerth is hard to pronounce. But Borkh isn't!"
                            }
                        </li>
                        <li>
                            {
                                'I know a joke, it goes like this. Three guys named Gigni, Gyrden, Gaard enter a bar...'
                            }
                        </li>
                        <li>One recruit, two recruits, three recruits...</li>
                    </ul>
                </p>

                <div className="emote">
                    <div className="avatar geralt" />
                    <div className="emote-text">Not bad. Not bad at all.</div>
                </div>

                <p>
                    {
                        "Maybe you are new to the game. Or you have hard time keeping up with the latest card changes. Or, like me, you can't remember crap. Don't worry then, Hyper Gwent got you covered. Hyper Gwent automatically detects card names, aliases or acronyms in the pages you visit, highlights them and shows a tooltip when hovering them."
                    }
                </p>

                <p>
                    {'Feature list:'}
                    <ul>
                        <li>
                            {
                                'Includes all existing cards, up to date with the latest patch'
                            }
                        </li>
                        <li>
                            {
                                'Support abbreviations, acronyms, plurals, missing capitals, missing accents, and missing punctuation'
                            }
                        </li>
                        <li>
                            {
                                'Non obstrusive. Add subtle highlights and does not break links.'
                            }
                        </li>
                        <li>
                            {
                                "Fast. You could enable it on any website, you would not feel it's here."
                            }
                        </li>
                    </ul>
                </p>

                <p>
                    {'Incoming features:'}
                    <ul>
                        <li>
                            {
                                'Enable on any website with a simple click (currently only enabled on r/gwent and GwentDB)'
                            }
                        </li>
                        <li>Automatic card updates</li>
                    </ul>
                </p>

                <p>What do you think of that, Dandelion?</p>

                <div className="emote">
                    <div className="avatar dandelion" />
                    <div className="emote-text">
                        {
                            'That… was actually rather impressive. Congratulations.'
                        }
                    </div>
                </div>
            </div>

            {downloadButton()}

            <p className="issues">
                This is an unofficial fan work under the Gwent Fan Content
                Guidelines. Not approved/endorsed by CD PROJEKT RED.
                <br />
                If you find bugs, if you want to submit new acronyms, request a
                feature, or contribute, post an issue <a href={REPO}>here</a>.
                <br />
                You can also contact{' '}
                <a href="https://www.reddit.com/message/compose/?to=Soreine">
                    /u/Soreine
                </a>
                .
            </p>
        </div>
        /* eslint-enable max-len */
    );
}

export default renderHomepage;
