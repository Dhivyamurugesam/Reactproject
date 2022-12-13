/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator from './app/routes/ApplicationNavigator';
import AuthorScreen from './app/screens/Author/AuthorScreen';
import { store } from './app/store';


const App = () => {
  return (
  
    <Provider store={store}>
   <ApplicationNavigator></ApplicationNavigator> 
    {/* <AuthorScreen></AuthorScreen> */}
    </Provider>
  );
};


export default App;
  


