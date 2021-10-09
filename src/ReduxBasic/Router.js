import { Provider } from 'react-redux'
import store from './Store'
import ReduxComp from "./ReduxComp";

export default function () {
    return (
        <Provider store={store}>
            <div>
                <ReduxComp/>
            </div>
        </Provider>
    )
}