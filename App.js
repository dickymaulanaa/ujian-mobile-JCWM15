import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './src/redux/reducer';
import  Main  from './src/navigation/Main';
// import { SafeAreaProvider } from 'react-native-safe-area-context';


const store = configureStore({reducer,});


const App =() =>{
  return (
 
    <NavigationContainer>
      <Provider store={store}>
        <Main/>
      </Provider>
    </NavigationContainer>

  );
};

export default App;