import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import Homepage from './Homepage';
import Login from './containers/Login';

const store = configureStore();

export default class App extends React.Component {
   render() {
     return (
       <Provider store={store}>
         <NativeRouter>
           <View style={styles.container}>
             <Route exact path="/" component={Homepage} />
             <Route path="/login" component={Login} />
          </View>
         </NativeRouter>
       </Provider>
     );
   }
 }


 const styles = StyleSheet.create({
   container: {
     flex: 1,
     // backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
