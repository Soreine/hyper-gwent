// @flow
/* @jsx h */
/* global document */

import {
    // eslint-disable-next-line
    h,
    render,
    Component
} from 'preact';

const CHANGE_CARD_DELAY = 1000; // ms

function getRandomCard(cards: { [CardID]: Card }): Card {
    const ids = Object.keys(cards);
    const randomIndex = Math.floor(Math.random() * ids.length);
    const randomId = ids[randomIndex];
    return cards[randomId];
}

class RandomCard extends Component<
    {
        cards: {
            [CardID]: Card
        }
    },
    {
        card: Card
    }
> {
    interval: IntervalID;

    constructor(props) {
        super();
        const { cards } = props;
        this.state = {
            card: getRandomCard(cards)
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.changeCard, CHANGE_CARD_DELAY);
        // this.interval = setTimeout(this.changeCard, CHANGE_CARD_DELAY * 2);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeCard = () => {
        const { cards } = this.props;

        this.setState({
            card: getRandomCard(cards)
        });
    };

    render() {
        const { card } = this.state;
        return (
            <div>
                {card.name} <br />
            </div>
        );
    }
}

function start(cards: { [CardID]: Card }) {
    const target = document.getElementById('random-card');
    if (target) {
        render(<RandomCard cards={cards} />, target);
    }
}

export { start };
