// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
    total: 0,
  }

  btnclick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevstate => ({
        img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prevstate.heads + 1,
        total: prevstate.total + 1,
      }))
    } else {
      this.setState(prevstate => ({
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prevstate.tails + 1,
        total: prevstate.total + 1,
      }))
    }
  }

  render() {
    const {img, heads, tails, total} = this.state
    return (
      <div className="bg">
        <div className="innerbg">
          <h1 className="headstyle">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={img} alt="toss result" />
          <button type="button" onClick={this.btnclick}>
            Toss Coin
          </button>
          <div className="style">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
