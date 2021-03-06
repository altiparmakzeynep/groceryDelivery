import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import ReduxThunk from 'redux-thunk';
import RouterComp from './src/router';
import rootReducer from './src/reducers/rootReducer';
import {AsyncStorage } from '@react-native-async-storage/async-storage';
// import { PhoneHeight } from './src/components/config/env';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  onIds(device) {
    const phoneToken = device.userId;
    AsyncStorage.setItem("device",phoneToken )
    console.log('Device info: ', phoneToken);
  }
  
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    const persisStore = persistStore(store)
    return (
      <Provider store={store} >
        <PersistGate persistor={persisStore}>
          <RouterComp/>
        </PersistGate>
      </Provider>
    )
  }
 }
