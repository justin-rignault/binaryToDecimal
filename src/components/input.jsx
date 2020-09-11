import React, {Component} from 'react'
import './input.css'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            decimal: ""
        }
    }

    confirmBinary(ev) {
        if(ev.keyCode !== 48 && ev.keyCode !== 49 && ev.keyCode !== 8 && ev.keyCode !== 39 && ev.keyCode !== 37) {
            ev.preventDefault();
          }
    }

    convertToBinary = (ev) => {
        const binVal = ev.target.value
        let currentDecimal = 0
        for(let i = binVal.length - 1; i >= 0; i-- ) {
            currentDecimal += +binVal[i] * Math.pow(2, binVal.length - 1 - i)
        }
        this.setState({ decimal: currentDecimal})
    }

    render() {
        return (
            <div>
                <div className="inputDiv">
                    <label htmlFor="input">Binary number:</label>
                    <input type="number" id="input" onKeyDown={this.confirmBinary} onChange={this.convertToBinary}></input>
                </div>
                <div className="inputDiv">
                    <label>Decimal number:</label>
                    <input readOnly value={this.state.decimal}></input>
                </div>
            </div>
        )
    }
}

export default Input