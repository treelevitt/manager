import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDWp-fpdFqmOzbgmqdfPl-0NNbllGpILLA',
            authDomain: 'manager-531bd.firebaseapp.com',
            databaseURL: 'https://manager-531bd.firebaseio.com',
            projectId: 'manager-531bd',
            storageBucket: 'manager-531bd.appspot.com',
            messagingSenderId: '616097523198'
          };

          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}

export default App;
