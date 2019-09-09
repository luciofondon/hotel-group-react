import React, { Fragment, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import data from '../../resources/api.json';
import reducers from '../../reducers';
import Home from '../components/home.jsx';
import Menu from '../components/menu.jsx';
import Room from '../components/room.jsx';
import Hotel from '../components/hotel.jsx';
import Header from '../components/header.jsx';
import NotFound from '../components/not-found.jsx';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const initialState = {
    data: {
        ...data
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
)

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Home}/>        
                        <Route exact path="/hotels" component={Hotel}/>        
                        <Route exact path="/rooms" component={Room}>            
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