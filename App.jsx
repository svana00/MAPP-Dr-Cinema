import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';

import AppContainer from './src/routes';

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <AppContainer />
      </View>
    </Provider>
  );
}
