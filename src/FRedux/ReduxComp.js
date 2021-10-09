import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actions as CounterActions} from './CounterSlice'
import {actions as TodoActions} from './TodoSlice'


class SubReduxComp extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <input type='button' onClick={this.props.actionsCreators.increase} value='increase'/>
                    <input type='button' onClick={this.props.actionsCreators.decrease} value='decrease'/>
                    <div>Current Counter => {this.props.counter}</div>
                </div>
                <div>
                    <input type='button' onClick={this.props.actionsCreators.increaseTodo} value='increaseTodo'/>
                    <input type='button' onClick={this.props.actionsCreators.decreaseTodo} value='decreaseTodo'/>
                    <ul>
                        {this.props.todoList.map(e => <li> {e} </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.counter,
        todoList: state.todo.todoList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionsCreators: bindActionCreators({...CounterActions, ...TodoActions}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubReduxComp)