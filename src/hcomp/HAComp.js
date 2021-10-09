import React from "react";

class CComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 1}
        this.increaseOne = this.increaseOne.bind(this)
    }

    increaseOne() {
        this.setState((state, props) => ({
            counter: state.counter + 0 + this.props.weight
        }))
    }

    render() {
        return (
            <div>{this.state.counter}<input type='button' onClick={this.increaseOne} value='increase'/></div>
        )
    }
}

export default CComp