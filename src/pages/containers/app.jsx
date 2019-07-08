import React, { Fragment, Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import Home from '../components/home';
import data from '../api.json';
import reducer from '../../reducers/data';
import Header from './components/header';
import NotFound from '../components/not-found';


const initialState = {
    data: {
        ...data
    }
}
const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(
        applyMiddleware(logger, logger_, thunk)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)


class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>        
                        <Route exact path="/hotels" component={Home}>            
                            <div>hoteles</div>
                        </Route>
                        <Route compoent={NotFound} />
                        <Redirect from="/h" to="hotels"/>
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App;