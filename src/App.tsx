import React from 'react';

import {
  StatusBar,
} from 'react-native';

import { Colors } from './utils';
import Route from './routes';
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
  //TODO: fix this
return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY_RED} />
      <Provider store={store}>
        <Route />
      </Provider>
    </>
  );
};

export default App;
