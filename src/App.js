import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app'
import '@firebase/auth'
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCjISFhbzv3O7pYWoF2T9_jAitNz7LuOkI",
            authDomain: "manager-007.firebaseapp.com",
            databaseURL: "https://manager-007.firebaseio.com",
            projectId: "manager-007",
            storageBucket: "manager-007.appspot.com",
            messagingSenderId: "374905155600"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store = {store} >
                <Router/>
            </Provider>
        );
    }
}

export default App;