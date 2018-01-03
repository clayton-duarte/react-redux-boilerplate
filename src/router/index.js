//import modules
import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from "react-router"
import { createStore, applyMiddleware } from "redux";
import { createHashHistory } from "history"
import React, { Component } from "react";
import { Provider } from "react-redux";
import Reducers from "../reducers";

//import pages
import Index from '../pages';
import NotFound from '../pages';

//define consts
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const routerHistory = useRouterHistory(createHashHistory)();

//functional connected component ROUTER
export default class extends Component {
    render() {
        return <Provider store={createStoreWithMiddleware(Reducers, devTools)}>
            <Router history={routerHistory} onUpdate={() => window.scrollTo(0, 0)}>
                <Route path='/'>
                    <IndexRedirect to='/home'/>
                </Route>
                <Route path='home'>
                    <IndexRoute component={Index}/>
                </Route>
                {/* Only create new routes above ˆˆˆˆ */}
                <Route path='*' component={NotFound}/>
            </Router>
        </Provider>
    }
}