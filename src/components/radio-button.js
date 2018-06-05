import React, { Component } from 'react'

class RadioButton extends Component {
    constructor(props) {
        super(props)
        this.state ={
            selected: 'yes'
        }
    }
    render() {
        return (
            <div>
                <label>
                    <input type='radio' value='yes' checked={this.state.selected === 'yes'} onChange={(e) => this.setState({ selected: e.target.value })} /> 
                        yes 
                </label>
                <label>
                    <input type='radio' value='no' checked={this.state.selected === 'no'} onChange={(e) => this.setState({ selected: e.target.value })}/> 
                        no 
                </label>
            </div>
        )
    }
}

export default RadioButton