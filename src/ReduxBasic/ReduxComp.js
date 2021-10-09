import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as ActionsCreators from './ActionsCreators'


class SubReduxComp extends React.Component {

    render() {
        return (
            <div>
                <input type='button' onClick={this.props.actionsCreators.increase} value='increase'/>
                <input type='button' onClick={this.props.actionsCreators.decrease} value='decrease'/>
                <div>xxx {this.props.counter}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionsCreators: bindActionCreators(ActionsCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubReduxComp)