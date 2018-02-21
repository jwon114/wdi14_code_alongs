import React from 'react'

export default class Slider extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: props.startValue || 0
        }
    }

    handleChange(event) {  
        this.setState({ value: event.target.value })
    }

    render() {
        return <div>
            <input 
                value={this.state.value}
                onChange={this.handleChange}
                // onChange={() => this.setState({ value: parseInt(this.state.value) + 1 })}
                min="0"
                max="10"
                type="range" />
            <input 
                value={this.state.value}
                // onChange={this.handleChange}
                type="text" />
        </div>
    }
}

