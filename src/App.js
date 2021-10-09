import './App.css';
import CompDemo from './Comp/Router'
import HCompDemo from './HComp/Router'
import ContextComp from './ContextComp/Router'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">CompDemo</Link>
                            </li>
                            <li>
                                <Link to="/HCompDemo">HCompDemo</Link>
                            </li>
                            <li>
                                <Link to="/ContextComp">ContextComp</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <CompDemo/>
                        </Route>
                        <Route path="/HCompDemo">
                            <HCompDemo/>
                        </Route>
                        <Route path="/ContextComp">
                            <ContextComp/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
