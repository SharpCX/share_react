import React from "react";
import DataSource from "./DataSource";
import HAComp from "./HAComp";

function withWeight(WrappedComp) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                weight: DataSource.getWeight()
            }
            this.handleChange = this.handleChange.bind(this)
        }

        componentDidMount() {
            DataSource.registerListener(this.handleChange)
        }

        componentWillUnmount() {
            DataSource.removeListener(this.handleChange)
        }

        handleChange(){
            this.setState(
                {
                    weight: DataSource.getWeight()
                }
            )
        }

        render() {
            return <WrappedComp weight={this.state.weight} {...this.props}/>
        }
    }
}

export const WithWeightAComp = withWeight(HAComp)
export const WithWeightBComp = withWeight(HAComp)