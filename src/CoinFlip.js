import React, { Component } from 'react'
import Coin from './Coin';

export default class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
    }

    flipCoin() {
        let randomIndex = Math.floor(Math.random() * this.props.coins.length);
        const newCoin = this.props.coins[randomIndex];
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nFlips + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }

    handleClick = () => {
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinFlip">
              <h1>Let's flip a coin</h1>
              {this.state.currCoin && <Coin currCoin={this.state.currCoin} />}
              <button onClick={this.handleClick}>Flip Me!</button>
              <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}