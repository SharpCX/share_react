import { Provider } from 'react-redux'
import store from './Store'
import ReduxComp from "./ReduxComp";
import FReduxComp from "./FReduxComp";

export default function () {
    return (
        <Provider store={store}>
            <div>
                <ReduxComp/>
                <hr/>
                <FReduxComp/>
            </div>
        </Provider>
    )
}