import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './router';
import NavigationService from './NavigationService';

class App extends Component {
    componentWillMount() {
        const config = {
            //insert your own Firebase credentials
          };

          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <RootStack 
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                    }} 
                />
            </Provider>
        );
    }
}

export default App;
