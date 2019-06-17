import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './../../redux/store/store'
import Routes from './../../routes';

export class App extends Component{

render(){
    return(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    )
}
}