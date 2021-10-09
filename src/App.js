import './App.css';
import CompDemo from './Comp/Router'
import HCompDemo from './HComp/Router'
import ContextComp from './ContextComp/Router'
import ReduxBasic from './ReduxBasic/Router'
import FRedux from './FRedux/Router'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Button} from 'antd';
import {Layout, Menu, Breadcrumb} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

function App() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Router>
                <Sider>
                    <nav>
                        <ul class='menu'>
                            <li>
                                <Link to="/">CompDemo普通组件</Link>
                            </li>
                            <li>
                                <Link to="/HCompDemo">HCompDemo高级组件</Link>
                            </li>
                            <li>
                                <Link to="/ContextComp">ContextComp全局变量</Link>
                            </li>
                            <li>
                                <Link to="/ReduxBasic">ReduxBasic Redux基础</Link>
                            </li>
                            <li>
                                <Link to="/FRedux">FRedux Redux现在用法</Link>
                            </li>
                        </ul>
                    </nav>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{margin: '50px 16px'}}>
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
                            <Route path="/ReduxBasic">
                                <ReduxBasic/>
                            </Route>
                            <Route path="/FRedux">
                                <FRedux/>
                            </Route>
                        </Switch>
                    </Content>
                </Layout>

            </Router>
        </Layout>
    );
}

export default App;
