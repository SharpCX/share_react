import logo from './logo.svg';
import './App.css';
import CompDemo from './components/Router'
import HCompDemo from './hcomp/Router'
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
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <CompDemo/>
                        </Route>
                        <Route path="/HCompDemo">
                            <HCompDemo/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
