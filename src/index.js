import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import reducers from './store/index'
import rootReducer from './store/reducers/rootReducer'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
// reduxFirestore reactReduxFirebase are store enhancers 
// connnecting redux to firebase 
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// withExtraArgument allows actions to pass extra arguments 
// * useFirestoreForProfile: let firebasereducer to use firestore to sink to the profile object on the firebase state
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
);


// store={store}
const app = (
  <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
  </Provider>
)

// waiting for auth is ready: attachAuthIsReady: true
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(app, document.getElementById('root'));
  serviceWorker.unregister();
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
